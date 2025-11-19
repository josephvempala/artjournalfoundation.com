import Link from "next/link";

const WorkWithUsPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.webp)",
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
              <li>Work With Us</li>
            </ul>
            <h2>Work With Us</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      <section className="wpo-event-area-s2 section-padding bg-green">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <h2>Interested to Work With Us?</h2>
                <p>
                  Artists/ Teachers/ Art enthusiasts who wish to contribute to
                  the mission of Art Journal Foundation can connect on the
                  following ID.
                  <span>
                    <a href="mailto:artjournalfoundation@gmail.com">
                      {" "}
                      artjournalfoundation@gmail.com
                    </a>
                  </span>
                </p>
                <h2>Freelance Openings :</h2>
                <p>
                  • Judges for competitions <br />• Expert opinion for Arts
                  IBDP, IB MYP, and IGCSE submissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithUsPage;
