"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");

  useEffect(() => {
    if (paymentId) {
      // In a real scenario, you might want to verify this payment ID with your backend
      // For now, we'll assume if we have a payment ID, the client-side flow completed.
      // A more robust check would be to poll an API that checks the DB status.
      setStatus("success");
    } else {
        setStatus("failed");
    }
  }, [paymentId]);


  return (
    <>
        {status === "loading" && (
            <div>
                <h3>Verifying payment...</h3>
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}

        {status === "success" && (
            <div className="alert alert-success">
                <h3 className="alert-heading">Registration Successful!</h3>
                <p>
                Thank you for registering for the Art Competition 2025. Your
                payment ID is <strong>{paymentId}</strong>.
                </p>
                <hr />
                <p className="mb-0">
                You will receive a confirmation email shortly with further
                details.
                </p>
                <div className="mt-4">
                <Link href="/" className="btn btn-primary">
                    Back to Home
                </Link>
                </div>
            </div>
        )}

        {status === "failed" && (
            <div className="alert alert-danger">
                <h3 className="alert-heading">Payment Verification Failed</h3>
                <p>
                We could not verify your payment details. If you believe this
                is an error, please contact support.
                </p>
                <div className="mt-4">
                <Link href="/competitions/art-competition-2025" className="btn btn-primary">
                    Try Again
                </Link>
                </div>
            </div>
        )}
    </>
  )
}