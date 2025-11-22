import Link from "next/link";
import Image from "next/image";
import withLayout from "@/components/layout";


const MentorshipProgramPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/workshop/WorkShop_Banner1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 10,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="page-header-bubble">
          <Image
            src="/assets/images/shapes/page-header-bubble.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link prefetch={false} style={{ color: "white" }} href="/">
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li style={{ color: "white" }}>
                1-1 Mentorship Program for IB Arts Educators
              </li>
            </ul>
            <h2 style={{ color: "black" }}>
              1-1 Mentorship Program for IB Arts Educators
            </h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Form Start */}
      <section className="event-form-page">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 col-lg-12 text-center"
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                animation: "floating 4s ease-in-out infinite",
              }}
            >
              <Image
                src="https://static.artjournalfoundation.com/events/mentership-program/Mentership Program 1 to 1.png"
                alt="1-1 Mentorship Program for IB Arts Educators"
                width={1000}
                height={600}
                style={{
                  maxWidth: "85%",
                  height: "auto",
                  borderRadius: "12px",
                  border: "8px solid #f9f9f9",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Form End */}

      {/* Registration Placeholder */}
      <section className="event-form-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div
                className="event-art-form mt-5"
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2
                  className="subtitle-event"
                  style={{
                    fontSize: "24px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Registration Details
                </h2>
                <hr />
                <div
                  style={{
                    textAlign: "center",
                    margin: "40px 0",
                    padding: "30px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    border: "1px solid #eee",
                  }}
                >
                  <h4 className="event-details-page__register-title">
                    Registration
                  </h4>
                  <p>
                    The original form and payment gateway logic have been
                    removed for this static Next.js migration.
                  </p>
                  <p>
                    Please contact us to register for this mentorship program.
                  </p>
                  <Link prefetch={false} href="/contact" className="thm-btn">
                    Contact Us to Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withLayout(MentorshipProgramPage);
