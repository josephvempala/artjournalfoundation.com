import Link from "next/link";
import React from "react";

const WhoWeArePage = () => {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/about-us-header.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="page-header-bubble">
          <img src="/assets/images/shapes/page-header-bubble.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link prefetch={false} href="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Who We Are?</li>
            </ul>
            <h1>Who We Are?</h1>
          </div>
        </div>
      </section>

      <section className="get-to-know">
        <div className="get-to-know-bubble float-bob-x">
          <img
            src="/assets/images/shapes/get-to-know-bubble.png"
            alt="About us"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="get-to-know__left">
                <div
                  className="gif-container"
                  style={{
                    border: "3px solid #007bff",
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <img
                    id="noRightClickImg"
                    src="/assets/images/backgrounds/AJF GIF Logo.gif"
                    alt="About us"
                    style={{ width: "100%", height: "auto" }}
                    // Disable right-click and image downloads
                  />
                  <div className="get-to-know-shape-1"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="get-to-know__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    What is Art Journal Foundation?
                  </span>
                  <h2 className="section-title__title"></h2>
                </div>
                <p className="get-to-know__text">
                  Art Journal Foundation is a creative platform by Elevating Art
                  Pvt. Ltd. that supports the process, practice, and education
                  in Arts and Culture across the globe. Art Journal Foundation
                  shall help to create resources and serve as a support platform
                  for students, teachers, and Art enthusiasts.
                </p>
                <p className="get-to-know__text">
                  It aims to serve as a platform that brings in resources to
                  enhance and encourage creativity, critical investigations,
                  explorations, and experiments that push boundaries of
                  knowledge and practice and challenge dominant narratives. We
                  believe that the arts and culture are essential to our
                  individual and community lives, and for a more equitable and
                  just world.
                </p>
                <p className="get-to-know__text">
                  Likewise, to every individual who is an artist, there are
                  essential traits which the Art Journal Foundation refers to as{" "}
                  <Link prefetch={false} href="/about/creator-profile" style={{ color: "blue" }}>
                    Creator Traits
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section from about-us.blade.php */}
      <section className="counter-two">
        <div className="container">
          <div className="counter-two__inner">
            <ul className="list-unstyled counter-two__list">
              <li>
                <div className="counter-two__icon">
                  <span className="icon-teamwork"></span>
                </div>
                <div className="counter-two__count-box">
                  <div className="counter-two__count-box-inner">
                    <h3 className="odometer" data-count="2500">
                      00
                    </h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__text">Teacher Community</p>
                </div>
              </li>
              <li>
                <div className="counter-two__icon">
                  <span className="icon-teamwork"></span>
                </div>
                <div className="counter-two__count-box">
                  <div className="counter-two__count-box-inner">
                    <h3 className="odometer" data-count="8000">
                      00
                    </h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__text">Student Community</p>
                </div>
              </li>
              <li>
                <div className="counter-two__icon">
                  <span className="icon-trophy"></span>
                </div>
                <div className="counter-two__count-box">
                  <div className="counter-two__count-box-inner">
                    <h3 className="odometer" data-count="150">
                      00
                    </h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__text">Events Hosted</p>
                </div>
              </li>
              <li>
                <div className="counter-two__icon">
                  <span className="icon-teamwork"></span>
                </div>
                <div className="counter-two__count-box">
                  <div className="counter-two__count-box-inner">
                    <h3 className="odometer" data-count="40">
                      00
                    </h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__text">Country Outreach</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeArePage;
