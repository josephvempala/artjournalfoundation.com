import Link from "next/link";
import PaymentStatus from "@/components/competitions/payment-status";
import { Suspense } from "react";
import withLayout from "@/components/layout";


export default withLayout(function ThankYouPage() {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/AJF-Banner.png)",
          }}
        ></div>
        <div className="page-header-bubble">
          <img src="/assets/images/shapes/page-header-bubble.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li style={{ color: "white" }}>Registration</li>
            </ul>
            <h2 style={{ color: "white" }}>Thank You</h2>
          </div>
        </div>
      </section>

      <section className="thank-you-page py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <Suspense fallback={<div>Loading...</div>}>
                <PaymentStatus />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
