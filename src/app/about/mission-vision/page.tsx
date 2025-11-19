import Link from "next/link";
import React from "react";

const MissionVisionPage = () => {
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
              <li>Mission Vision</li>
            </ul>
            <h1>Mission Vision</h1>
          </div>
        </div>
      </section>

      <section className="team-one about-team-page">
        <div
          className="team-one__bubbles wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
          style={{
            backgroundImage: "url(/assets/images/shapes/team-one-bubbles.png)",
          }}
        ></div>
        <div
          className="team-one__shape-bg"
          style={{
            backgroundImage: "url(/assets/images/shapes/team-one-shape-bg.png)",
          }}
        ></div>
        <div className="team-one-start-1 zoominout">
          <img src="/assets/images/shapes/team-one-star-1.png" alt="" />
        </div>
        <div className="team-one-start-2 zoominout-2">
          <img src="/assets/images/shapes/team-one-star-2.png" alt="" />
        </div>
        <div className="team-one-start-3 zoominout">
          <img src="/assets/images/shapes/team-one-star-3.png" alt="" />
        </div>
        <div className="team-one-start-4 zoominout-2">
          <img src="/assets/images/shapes/team-one-star-4.png" alt="" />
        </div>
        <div className="team-one-start-5 zoominout">
          <img src="/assets/images/shapes/team-one-star-5.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Mission */}
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="team-one__single">
                <div className="team-one__content">
                  <div className="team-one__title-box">
                    <h3 className="team-one__name">MISSION</h3>
                    <p>
                      Develop a resource platform to invoke creative thinking,
                      the building block of a masterpiece.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="team-one__single">
                <div className="team-one__content">
                  <div className="team-one__title-box">
                    <h3 className="team-one__name">VISION</h3>
                    <p>
                      Build a community that celebrates the uniqueness and
                      diverse perspectives on art with the focus on nurturing
                      creators
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motto */}
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="team-one__single">
                <div className="team-one__content">
                  <div className="team-one__title-box">
                    <h3 className="team-one__name">MOTTO</h3>
                    <p>Be the Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionPage;
