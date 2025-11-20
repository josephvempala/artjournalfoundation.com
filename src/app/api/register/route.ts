import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import { registrations } from "@/lib/db/schema";
import { NextRequest, NextResponse } from "next/server";

interface RegisterRequest {
  competition: string;
  studentName: string;
  schoolName: string;
  email: string;
  contact: string;
  grade: string;
  category: string;
  place: string;
  instagramHandle?: string;
  paymentMethod: string;
  amount: number;
  currency: string;
  turnstileToken: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as RegisterRequest;
  const {
    competition,
    studentName,
    schoolName,
    email,
    contact,
    grade,
    category,
    place,
    instagramHandle,
    paymentMethod,
    amount,
    currency,
    turnstileToken,
  } = body;

  // 1. Validate Turnstile Token
  const turnstileVerifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecret) {
    console.error("TURNSTILE_SECRET_KEY is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const turnstileFormData = new FormData();
  turnstileFormData.append("secret", turnstileSecret);
  turnstileFormData.append("response", turnstileToken);
  turnstileFormData.append("remoteip", req.headers.get("CF-Connecting-IP") || "");

  const turnstileResponse = await fetch(turnstileVerifyUrl, {
    method: "POST",
    body: turnstileFormData,
  });

  const turnstileResult = (await turnstileResponse.json()) as { success: boolean };

  if (!turnstileResult.success) {
    return NextResponse.json({ error: "Invalid Turnstile token" }, { status: 400 });
  }

  // 2. Create Razorpay Order
  const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!razorpayKeyId || !razorpayKeySecret) {
    console.error("RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64");

  const orderResponse = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      amount: amount * 100, // Amount in subunits (paise/cents)
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        competition,
        studentName,
        email,
      },
    }),
  });

  if (!orderResponse.ok) {
    const errorData = await orderResponse.json();
    console.error("Razorpay Order Creation Failed:", errorData);
    return NextResponse.json({ error: "Failed to create payment order" }, { status: 500 });
  }

  const orderData = (await orderResponse.json()) as { id: string; amount: number; currency: string };

  // 3. Save to Database
  let db;
  try {
    const ctx = await getCloudflareContext();
    db = drizzle(ctx.env.DB as D1Database);
  } catch (e) {
     // Fallback for local dev if getCloudflareContext fails or if running in nodejs_compat without it
     console.warn("Could not get Cloudflare context, trying process.env for DB (might fail if not bound)");
     // In local dev with `next dev`, we might not have the D1 binding easily accessible without the worker environment.
     // However, for this task, we assume the environment is set up correctly or we are mocking.
     // If DB is undefined, drizzle will fail.
     if (process.env.DB) {
         // This path is unlikely to work for D1 binding in Node environment directly without a proxy
         // But let's leave it as a fallback attempt or error out.
         console.error("DB binding found in process.env but it might be a string/object mismatch");
     }
     return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }

  try {
    await db.insert(registrations).values({
      competition,
      studentName,
      schoolName,
      email,
      contact,
      grade,
      category,
      place,
      instagramHandle,
      paymentMethod,
      amount,
      currency,
      razorpayOrderId: orderData.id,
      paymentStatus: "pending",
    });
  } catch (error) {
    console.error("Database Insert Failed:", error);
    return NextResponse.json({ error: "Failed to save registration" }, { status: 500 });
  }

  return NextResponse.json({
    orderId: orderData.id,
    keyId: razorpayKeyId,
    amount: orderData.amount,
    currency: orderData.currency,
  });
}
