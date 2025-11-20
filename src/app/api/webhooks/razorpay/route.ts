import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import { registrations } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  let ctx;
  let db;
  try {
    ctx = await getCloudflareContext();
    db = drizzle(ctx.env.DB as D1Database);
  } catch (_) {
      console.error("Could not get Cloudflare context");
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
  const webhookSecret = ctx.env.RAZORPAY_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("RAZORPAY_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const signature = req.headers.get("x-razorpay-signature");
  const body = await req.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  // Verify Signature
  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(body)
    .digest("hex");

  if (signature !== expectedSignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);

  if (event.event === "payment.captured") {
    const payment = event.payload.payment.entity;
    const orderId = payment.order_id;
    const paymentId = payment.id;

    try {
      await db
        .update(registrations)
        .set({
          paymentStatus: "paid",
          razorpayPaymentId: paymentId,
        })
        .where(eq(registrations.razorpayOrderId, orderId));

      return NextResponse.json({ status: "ok" });
    } catch (error) {
      console.error("Database Update Failed:", error);
      return NextResponse.json({ error: "Failed to update registration" }, { status: 500 });
    }
  }

  return NextResponse.json({ status: "ignored" });
}
