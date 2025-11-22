import Link from "next/link";
import Image from "next/image";
import EventPhotoSlider from "@/components/events/EventPhotoSlider";
import withLayout from "@/components/layout";


const AestheteConclave2024Page = () => {
  const workshopLeaders = [
    {
      name: "MR. SAKET RAJE",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Saket Raje.png",
    },
    {
      name: "MS. DAHLIA ATABANI",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Dahlia Atabani.png",
    },
    {
      name: "MS. APARNA MUGWE",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Ms. Aparna Mugwe.jpg",
    },
    {
      name: "MR. SUBRATA GHOSH",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Mr. Subrata Ghosh.webp",
    },
    {
      name: "MR. GAUTAM MENON",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Gautam Menon.png",
    },
    {
      name: "MS. ANANNYA TRIPATHYI",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Anannya Tripathyi.jpg",
    },
    {
      name: "MS. RUCHIRA BANKA",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Ms. Ruchira Banka.jpg",
    },
    {
      name: "MR. NIRAV PATEL",
      photo:
        "https://static.artjournalfoundation.com/events/speaker-photo/Mr. Nirav Patel.jpg",
    },
  ];

  const eventPhotos = [
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 1.jpeg",
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 2.jpg",
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 3.jpg",
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 4.jpg",
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 5.jpg",
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 6.jpg",
    "https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete Conclave 7.jpg",
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
                <Link prefetch={false} style={{ color: "black" }} href="/">
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li style={{ color: "black" }}>AESTHETE CONCLAVE 2024</li>
            </ul>
            <h2 style={{ color: "black", textAlign: "left" }}>
              AESTHETE CONCLAVE 2024
            </h2>
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
                AESTHETE CONCLAVE 2024
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                41 participants... 19 schools ...13 cities
              </p>
            </div>
          </div>
          <div className="row text-center" style={{ marginBottom: "40px" }}>
            <div className="col-xl-12 col-lg-12">
              <a
                href="https://static.artjournalfoundation.com/events/aesthete-conclave/Aesthete_Conclave_brochure.pdf"
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
              <br />
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                First ever Professional Development Arts Conclave in India that
                proved to be a collaborative platform for Arts educators from
                across the nation, giving them exposure to Building Arts
                Curriculum in their school context. The conclave included 18
                sessions( to be chosen from) led by 8 International Curriculum
                experts from Mumbai, Chennai, Bangalore, Kolkata, Noida covering
                topics ranging from planning Arts Curriculum, to ideal
                International Arts classrooms, to differentiation to
                assessments.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                The engaging and thought provoking Panel discussion around &quot;Arts
                in the Life of 21st Century Learners&quot; left all the Arts
                educators with immersive thoughts about their role in
                strengthening Arts as a not only a subject but a way of life.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                This Conclave organised and hosted by SNS, Noida in association
                with Art Journal Foundation aligned to our mission of creating
                purposeful citizens of the society and the AJF mission to create
                the creators.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                The Aesthete Conclave - 2nd and 3rd April 2024 marked the
                beginning of a new and meaningful learning journey that inspires
                everyone to empower the individual within them. The campus vibed
                with the happiness and excitement of the participants who had
                meaningful takeaways and admiration and appreciation for the
                event.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                Such a Profession Development platform that was the first time
                exposure for Arts teachers left them with a conviction of the
                importance of collaboration across Visual and Performing Arts.
              </p>
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
              Know Workshop Leaders
            </h2>
            <div
              className="workshop-grid"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {workshopLeaders.map((leader) => (
                <div
                  key={leader.name}
                  className="leader-card"
                  style={{
                    width: "calc(25% - 20px)",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    width={180}
                    height={180}
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "10px",
                    }}
                  />
                  <p>
                    <strong>{leader.name}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Photos Section - Static Display */}
          <EventPhotoSlider eventPhotos={eventPhotos}></EventPhotoSlider>

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

export default withLayout(AestheteConclave2024Page);
