"use client";

import { useState, useEffect } from "react";
import {
  RiCloseLine,
  RiHeartFill,
  RiLoader2Line,
  RiCheckboxCircleFill,
  RiErrorWarningLine,
} from "@remixicon/react";
import { toast } from "sonner";

export default function DonateModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState("250"); // Default donation amount
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("idle"); // idle, processing, verifying, success, failed
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setPaymentStatus("idle");
      setAmount("250");
      setCustomAmount("");
      setLoading(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQuickAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    // Allow only numbers
    if (val === "" || /^[0-9]+$/.test(val)) {
      setCustomAmount(val);
      setAmount("");
    }
  };

  const getFinalAmount = () => {
    return amount ? parseInt(amount, 10) : parseInt(customAmount, 10) || 0;
  };

  const handlePay = async () => {
    const finalAmount = getFinalAmount();

    if (finalAmount < 10) {
      toast.error("Minimum donation amount is ₹10.");
      return;
    }

    setLoading(true);
    setPaymentStatus("processing");
    setErrorMessage("");

    try {
      // Step 1: Create Order on Backend
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: finalAmount * 100, // Convert to paise
          currency: "INR",
          receipt: `donate_${Date.now()}`,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        if (response.status === 401) {
          throw new Error(errData.error || "Authentication failed with payment gateway.");
        }
        throw new Error(errData.error || "Failed to initiate transaction.");
      }

      const orderData = await response.json();

      // Step 2: Open Razorpay Checkout Modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Aditya Raul",
        description: "Support & Sponsorship",
        image: "/profile_photo_blue-bg.png", // Using existing profile photo as logo
        order_id: orderData.order_id,
        handler: async function (paymentResponse) {
          try {
            setLoading(true);
            setPaymentStatus("verifying");

            // Step 3: Verify signature on Backend
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              setPaymentStatus("success");
              toast.success("Thank you! Payment verified successfully.");
            } else {
              setPaymentStatus("failed");
              setErrorMessage(verifyData.error || "Payment verification failed.");
              toast.error(verifyData.error || "Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            setPaymentStatus("failed");
            setErrorMessage("An error occurred during verification.");
            toast.error("Failed to verify signature.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Razorpay Standard Checkout",
        },
        theme: {
          color: "#64FFDA", // Matching Aditya's accent color
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            setPaymentStatus("idle");
            toast.warning("Payment cancelled by user.");
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (failedResponse) {
        console.error("Payment failed:", failedResponse.error);
        setPaymentStatus("failed");
        setErrorMessage(failedResponse.error.description || "Payment failed.");
        toast.error(`Payment failed: ${failedResponse.error.description}`);
      });

      rzp.open();
    } catch (err) {
      console.error("Checkout initialization error:", err);
      setPaymentStatus("failed");
      setErrorMessage(err.message || "Failed to initialize payment.");
      toast.error(err.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md glass rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#e6f1ff]/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <RiCloseLine size={24} />
        </button>

        {paymentStatus === "success" ? (
          <div className="text-center py-6 space-y-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#64FFDA]/15 text-[#64FFDA] rounded-full flex items-center justify-center animate-bounce">
              <RiCheckboxCircleFill size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white">Payment Successful!</h3>
            <p className="text-secondary max-w-xs text-sm">
              Thank you so much for your support! Your contribution of ₹{getFinalAmount()} goes a
              long way.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#64FFDA] text-primary hover:bg-[#64FFDA]/80 font-semibold rounded-lg w-full transition-all duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : paymentStatus === "failed" ? (
          <div className="text-center py-6 space-y-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500/15 text-red-500 rounded-full flex items-center justify-center">
              <RiErrorWarningLine size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white">Payment Failed</h3>
            <p className="text-secondary max-w-xs text-sm">
              {errorMessage || "We couldn't process your transaction. Please try again."}
            </p>
            <div className="flex gap-4 w-full mt-6">
              <button
                onClick={() => {
                  setPaymentStatus("idle");
                  setErrorMessage("");
                }}
                className="px-6 py-2.5 border border-white/20 text-white hover:bg-white/5 rounded-lg flex-1 font-semibold transition-all duration-300 cursor-pointer"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-red-500 text-white hover:bg-red-600 rounded-lg flex-1 font-semibold transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-3 text-[#64FFDA]">
              <RiHeartFill size={28} className="animate-pulse" />
              <h3 className="text-xl font-bold text-white">Support My Work</h3>
            </div>
            <p className="text-[#e6f1ff]/70 text-sm leading-relaxed">
              If you like my portfolio, projects, or photography, feel free to support me with a
              tip. Every donation keeps me motivated!
            </p>

            {/* Quick Amount Select */}
            <div className="space-y-2">
              <span className="text-xs text-[#e6f1ff]/60 font-medium">Select Amount</span>
              <div className="grid grid-cols-4 gap-2">
                {["100", "250", "500", "1000"].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleQuickAmountClick(val)}
                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      amount === val
                        ? "bg-[#64FFDA] text-primary"
                        : "bg-white/5 hover:bg-white/10 text-secondary hover:text-white border border-white/10"
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div className="space-y-2">
              <span className="text-xs text-[#e6f1ff]/60 font-medium">Or enter custom amount</span>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary font-semibold">
                  ₹
                </span>
                <input
                  type="text"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white font-medium focus:ring-2 focus:ring-[#64FFDA] focus:border-transparent text-sm transition-all"
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handlePay}
              disabled={loading || getFinalAmount() < 1}
              className={`w-full py-3 rounded-lg font-bold text-center flex items-center justify-center transition-all duration-300 cursor-pointer ${
                loading
                  ? "bg-white/10 text-secondary cursor-not-allowed"
                  : "bg-[#64FFDA] text-primary hover:bg-[#64FFDA]/80 hover:shadow-[0_0_15px_rgba(100,255,218,0.4)]"
              }`}
            >
              {loading ? (
                <>
                  <RiLoader2Line size={20} className="animate-spin mr-2" />
                  {paymentStatus === "verifying" ? "Verifying..." : "Initializing..."}
                </>
              ) : (
                `Pay ₹${getFinalAmount() || "0"}`
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
