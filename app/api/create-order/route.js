import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { amount, currency, receipt } = body;

    // Validate amount >= 1000 paise (10 INR)
    if (amount === undefined || amount === null || typeof amount !== "number" || amount < 1000) {
      return NextResponse.json(
        { error: "Amount is required, must be a number, and must be at least 1000 paise (10 INR)" },
        { status: 400 },
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay API credentials not configured" },
        { status: 500 },
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);

    // Handle authentication failures (usually status 401 or specific error messages)
    if (
      error.statusCode === 401 ||
      (error.error &&
        error.error.code === "BAD_REQUEST_ERROR" &&
        error.error.description.includes("Key")) ||
      (error.message && error.message.includes("401"))
    ) {
      return NextResponse.json(
        { error: "Authentication failed with Razorpay API. Check credentials." },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to create Razorpay order" },
      { status: 500 },
    );
  }
}
