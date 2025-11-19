import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import "../../public/assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../public/assets/vendors/animate/animate.min.css";
import "../../public/assets/vendors/animate/custom-animate.css";
import "../../public/assets/vendors/fontawesome/css/all.min.css";
import "../../public/assets/css/brote-responsive.css";
import "../../public/assets/css/brote.css";
import "../../public/assets/vendors/brote-icons/style.css";

export const metadata: Metadata = {
  title: "Art Journal Foundation",
  description:
    "Art Journal Foundation is a creative platform by Elevating Art Pvt. Ltd. that supports the process, practice, and education in Arts and Culture across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Main JavaScript files from original site - added using next/script for proper loading */}
        <Script
          src="/assets/vendors/jquery/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendors/jquery-appear/jquery.appear.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendors/jquery-migrate/jquery-migrate.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendors/jquery-validate/jquery.validate.min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/vendors/wow/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/brote.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
