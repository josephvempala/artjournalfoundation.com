import { drizzle } from "drizzle-orm/d1";
import { formSubmissions } from "@/lib/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

interface TurnstileValidationResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const formName = formData.get("formName") as string;
  const turnstileToken = formData.get("cf-turnstile-response") as string;

  if (!formName) {
    return NextResponse.json({ error: "Form name is required" }, { status: 400 });
  }

  const { env } = getCloudflareContext();

  if (!turnstileToken && env.NEXTJS_ENV === 'production') {
    return NextResponse.json({ error: "Turnstile token is required" }, { status: 400 });
  }

  // 1. Verify Turnstile token
  if (turnstileToken && env.NEXTJS_ENV === 'production') {
    const turnstileSecretKey = env.TURNSTILE_SECRET_KEY!;
    const ip = request.headers.get("CF-Connecting-IP");

    const validationFormData = new FormData();
    validationFormData.append("secret", turnstileSecretKey);
    validationFormData.append("response", turnstileToken);
    validationFormData.append("remoteip", ip!);

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

    const result = await fetch(url, {
      body: validationFormData,
      method: "POST",
    });

    const outcome = await result.json() as TurnstileValidationResponse;

    if (!outcome.success) {
      return NextResponse.json({ error: "Invalid Turnstile token" }, { status: 400 });
    }
  }

  // 2. Save form data to D1
  const data = Object.fromEntries(formData.entries());

  try {
    const db = drizzle(env.DB);
    await db.insert(formSubmissions).values({
      formName,
      data,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving form submission:", error);
    return NextResponse.json({ error: "Failed to save form submission" }, { status: 500 });
  }
}