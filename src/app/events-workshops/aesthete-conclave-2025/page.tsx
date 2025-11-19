import Link from "next/link";
import Image from "next/image";

const AestheteConclave2025Page = () => {
  const workshopLeaders = [
    {
      name: "Zeba Khan",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Zeba Khan.jpg",
    },
    {
      name: "Amit Kawale",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Amit Kawale.jpg",
    },
    {
      name: "Vaishali Walanj",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Vaishali Walanj.jpg",
    },
    {
      name: "Aparna Mugwe",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Ms. Aparna.png",
    },
    {
      name: "Ruchira Banka",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Ms. Ruchira Banka.jpg",
    },
    {
      name: "Nirav Patel",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Mr. Nirav Patel.jpg",
    },
  ];

  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(https://static.artjournalfoundation.com/competition/Creator-Art-Award.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                <Link prefetch={false} href="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>AESTHETE CONCLAVE 2025</li>
            </ul>
            <h2>AESTHETE CONCLAVE 2025</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Content Start */}
      <section className="competition-form-page">
        <div className="container">
          {/* Section 1 */}
          <div className="row text-center" style={{ padding: "10px 0" }}>
            <div className="col-xl-12 col-lg-12">
              <h1
                style={{
                  fontSize: "64px",
                  color: "#001F3F",
                  marginBottom: "20px",
                }}
              >
                AESTHETE CONCLAVE 2025
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                📅 September 13, 2025 | 🕗 8:00 AM - 4:30 PM
                <br />
                📍 JBCN International School, Parel, Mumbai
              </p>
            </div>
          </div>
          <div className="row text-center" style={{ marginBottom: "40px" }}>
            <div className="col-xl-12 col-lg-12">
              <a
                href="https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 2025.pdf"
                target="_blank"
              >
                <button
                  className="btn btn-primary"
                  style={{ fontSize: "20px" }}
                >
                  <i className="fa fa-download"></i> Download Brochure Here
                </button>
              </a>
            </div>
          </div>
          <hr />
          <div className="row text-center" style={{ marginBottom: "40px" }}>
            <div className="col-xl-12 col-lg-12">
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                Aesthete Conclave is an experience created to deep dive into the
                International Arts curriculum frameworks and requirements along
                with experts in the field. It is a platform for collaboration,
                sparking new ideas and inspirations, building a supportive
                network, and boosting professional development.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-6 col-lg-6">
              <h2 style={{ fontSize: "24px", color: "#31ced5" }}>
                You can expect:{" "}
              </h2>
              <hr />
              <ul>
                <li>1. Understanding of curriculum requirements .</li>
                <li>2. Engaging and Interactive Sessions </li>
                <li>3. Collaborative networking platform </li>
                <li>4. Socializing with peers and experts .</li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6">
              <h2 style={{ fontSize: "24px", color: "#31ced5" }}>
                Your take-aways:{" "}
              </h2>
              <hr />
              <ul>
                <li>1. eCertificate of participation </li>
                <li>2. Teaching - learning resources </li>
                <li>3. Lifelong learning </li>
                <li>4. Friends for life</li>
              </ul>
            </div>
          </div>

          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ color: "#0d2b50" }}>
              <img
                src="https://img.icons8.com/emoji/28/calendar-emoji.png"
                alt="calendar"
              />
              <strong>Flow of Events</strong>
            </h2>

            <div className="accordion shadow-sm rounded" id="eventAccordion">
              {/* Accordion Item Template - Simplified for static content */}
              <div className="accordion-item bg-light">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="false"
                  >
                    8:00 am to 8:30 am — Registration + Breakfast
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading1"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">Registration + Breakfast</div>
                </div>
              </div>

              <div className="accordion-item bg-white">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                  >
                    8:30 am to 9:00 am — Opening ceremony and Welcome Address
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading2"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">
                    Opening ceremony and Welcome Address
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-light">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                  >
                    9:10 am to 10:10 am — Common Session
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading3"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">
                    <strong>Weaving Identity:</strong> Exploring School Mission,
                    Values, and Identity Through Art Education
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-white">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                  >
                    10:30 am to 12:30 pm — Breakout Session 1
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">
                    <strong>MYP:</strong> Differentiation and UDL in the Arts
                    Studio:
                    <br />
                    Understand and apply principles of differentiation and
                    Universal Design for Learning (UDL) in the Visual Arts
                    classroom to support diverse learners and access for all.
                    <br />
                    <br />
                    <strong>DP:</strong> Navigating the New Assessment
                    Landscape: IBDP Visual Arts 2027 Tasks and Inquiry-Driven
                    Practice
                    <br />
                    <br />
                    <strong>IGCSE:</strong> Shaping & Showcasing the Journey
                    <br />
                    Focus: Evolving Ideas and Curating Final Work
                    <br />
                    <br />
                    <strong>A Levels:</strong> Scaffolded independence -
                    balancing freedom and framework
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-light">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                  >
                    12:30 pm to 1:15 pm — Lunch
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading5"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">Lunch</div>
                </div>
              </div>

              <div className="accordion-item bg-white">
                <h2 className="accordion-header" id="heading6">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                  >
                    1:15 pm to 2:30 pm — Breakout Session 2
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading6"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">
                    <strong>MYP:</strong> Designing for Inquiry in MYP Visual
                    Arts
                    <br />
                    Explore how to create concept-driven, inquiry-based learning
                    experiences using the MYP framework.
                    <br />
                    <br />
                    <strong>DP:</strong> The Inquiry Compass: Navigating Create,
                    Connect, Communicate
                    <br />
                    <br />
                    <strong>IGCSE:</strong> Foundations of Discovery
                    <br />
                    Focus: Building strong visual inquiry
                    <br />
                    <br />
                    <strong>A Levels:</strong> What is your Art teachers
                    survival kit — tools, hacks and systems to save time and
                    sanity
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-light">
                <h2 className="accordion-header" id="heading7">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse7"
                    aria-expanded="false"
                  >
                    2:30 pm to 4:00 pm — Breakout Session 3
                  </button>
                </h2>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading7"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">
                    <strong>MYP:</strong> Guiding Learners through Arts
                    Portfolios
                    <br />
                    Build effective methods to mentor students in developing and
                    reflecting on their portfolios, aligned with IB
                    expectations.
                    <br />
                    <br />
                    <strong>DP:</strong> Cultivating Artistic Growth: Mentoring
                    in the 2027 Visual Arts Curriculum
                    <br />
                    <br />
                    <strong>IGCSE:</strong> Through the Assessor’s Lens
                    <br />
                    Focus: Understanding Excellence and Grading through Real
                    Portfolios
                    <br />
                    <br />
                    <strong>A Levels:</strong> Unpacking the assessment
                    objectives — clarity and consistency in marking A-level Art
                    and Design
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-white">
                <h2 className="accordion-header" id="heading8">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse8"
                    aria-expanded="false"
                  >
                    4:00 pm to 4:30 pm — Closing ceremony and High Tea
                  </button>
                </h2>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading8"
                  data-bs-parent="#eventAccordion"
                >
                  <div className="accordion-body">
                    Closing ceremony and High tea
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Leaders Section */}
          <div
            className="section-container"
            style={{
              textAlign: "center",
              margin: "40px 0",
              padding: "30px",
              backgroundColor: "#f4f4f4",
              borderRadius: "10px",
            }}
          >
            <h2
              className="section-title"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#31ced5",
              }}
            >
              Know Your Workshop Leaders
            </h2>
            <p
              className="text-center text-muted mb-4"
              style={{ maxWidth: "600px", margin: "auto" }}
            >
              Meet the passionate art education leaders who bring creativity and
              innovation into the classroom.
            </p>
            <div className="workshop-grid d-flex justify-content-center gap-4">
              {workshopLeaders.map((leader) => (
                <div key={leader.name} className="leader-card text-center">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    width={180}
                    height={180}
                    className="leader-img mb-2"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      padding: "2px",
                      border: "2px solid #0d2b50",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  />
                  <p className="fw-bold text-dark small mb-0">
                    {leader.name.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Placeholder */}
          <div
            className="event-details-page__register"
            style={{
              textAlign: "center",
              margin: "40px 0",
              padding: "30px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              border: "1px solid #eee",
            }}
          >
            <h4 className="event-details-page__register-title">Registration</h4>
            <p>
              The original form and payment gateway logic have been removed for
              this static Next.js migration.
            </p>
            <p>Please contact us for more information about this event.</p>
            <Link prefetch={false} href="/contact" className="thm-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Content End */}
    </>
  );
};

export default AestheteConclave2025Page;
