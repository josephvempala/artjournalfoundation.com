import Link from "next/link";
import Image from "next/image";
import withLayout from "@/components/layout";


const SparkCreativityResult2025Page = () => {
  const winnerData = [
    {
      title: "Winner",
      author: "Samuel Ohene-Sarfo",
      artworkSrc:
        "https://static.artjournalfoundation.com/competition/creativity/Silenced by Peers.png",
      pdfSrc:
        "https://static.artjournalfoundation.com/competition/creativity/samuel-ohene-sarfo-spark-creativity-2025.pdf",
    },
    {
      title: "Winner",
      author: "Mariam Oladepo-Ajagbe",
      artworkSrc:
        "https://static.artjournalfoundation.com/competition/creativity/Woven Sovereignty.png",
      pdfSrc:
        "https://static.artjournalfoundation.com/competition/creativity/mariam-oladepo-ajagbe-spark-creativity-2025.pdf",
    },
    {
      title: "Winner",
      author: "Ebenezer Kwamen Asime",
      artworkSrc:
        "https://static.artjournalfoundation.com/competition/creativity/We Are All In This Together (2).png",
      pdfSrc:
        "https://static.artjournalfoundation.com/competition/creativity/ebenezer-kwame-asime-spark-creativity-2025.pdf",
    },
  ];

  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(https://static.artjournalfoundation.com/competition/Article-and-Research.png)",
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
              <li style={{ color: "black" }}>Spark Creativity 2025 – Result</li>
            </ul>
            <h2 style={{ color: "black", textAlign: "left" }}>
              Spark Creativity 2025 – Result
            </h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/* Celebration Section */}
      <section className="event-form-page">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 col-lg-12 text-center"
              style={{ marginBottom: "20px" }}
            >
              <h2
                style={{
                  color: "#222",
                  textAlign: "center",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                🎉 SPARK CREATIVITY 2025 – RESULTS ANNOUNCED! 🎨
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "#007b5e",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  marginBottom: "30px",
                }}
              >
                Congratulations to all our inspiring contributors! 🥳 Your
                thoughtful writing and creative insights are lighting the way
                for arts education.
              </p>
            </div>
            <div
              className="col-xl-12 col-lg-12 text-center"
              style={{ position: "relative", borderRadius: "12px" }}
            >
              <Image
                src="https://static.artjournalfoundation.com/competition/creativity/Spark Creativity Result.png"
                alt="Creator Art Award"
                width={1000}
                height={500}
                style={{
                  maxWidth: "70%",
                  height: "auto",
                  border: "6px solid #ffffff",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  borderRadius: "12px",
                }}
              />
              <div style={{ marginTop: "20px" }}>
                <button
                  //   onClick={() => {
                  //     // Placeholder for confetti logic, as it requires window/document access
                  //     alert("Confetti would launch here!");
                  //   }}
                  className="btn btn-warning btn-lg shadow animate__animated animate__pulse animate__infinite"
                  style={{ borderRadius: "50px" }}
                >
                  🎉 Celebrate With Us!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winning Entries Section */}
      <section className="student-work-showcase py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2
              style={{ color: "#222", fontSize: "2.2rem", fontWeight: "700" }}
            >
              📝 Celebrating Writing Excellence – Spark Creativity 2025
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#555" }}>
              Dive into the thought-provoking work of educators who are
              redefining art education.
            </p>
          </div>
          <div className="row justify-content-center">
            {winnerData.map((entry, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body text-center">
                    <h6 className="card-title">{entry.title}</h6>

                    <a href={entry.pdfSrc} target="_blank">
                      <Image
                        src={entry.artworkSrc}
                        alt={`Artwork for ${entry.author}`}
                        width={400}
                        height={300}
                        style={{
                          width: "100%",
                          borderRadius: "12px",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                          transition: "transform 0.3s ease",
                        }}
                        // onMouseOver={(e) =>
                        //   (e.currentTarget.style.transform = "scale(1.05)")
                        // }
                        // onMouseOut={(e) =>
                        //   (e.currentTarget.style.transform = "scale(1)")
                        // }
                      />
                    </a>

                    <a
                      href={entry.pdfSrc}
                      className="btn btn-sm btn-outline-primary mt-2"
                      target="_blank"
                    >
                      View Fullscreen
                    </a>

                    <p
                      style={{
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#007b5e",
                      }}
                    >
                      {entry.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default withLayout(SparkCreativityResult2025Page);
