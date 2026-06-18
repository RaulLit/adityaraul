import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Check for missing fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json(
        { error: "Razorpay API credentials not configured" },
        { status: 500 },
      );
    }

    // Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Payment verification failed. Signature mismatch." },
        { status: 400 },
      );
    }

    // Return success only if signatures match
    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error("Error verifying payment signature:", error);
    return NextResponse.json(
      { error: error.message || "Failed to verify payment signature" },
      { status: 500 },
    );
  }
}
