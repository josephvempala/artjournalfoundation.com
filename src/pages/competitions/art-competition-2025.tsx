import Link from "next/link";
import withLayout from "@/components/layout";


const CompetitionPage = () => {
  const competitions = [
    {
      id: "rang",
      title: "Art",
      description:
        "Rang is Annual Art Online Competition organized by Art Journal Foundation that aims at enhancing creativity and motivation skills amongst school students.",
      image: "/assets/images/competition/Rang-Logo.png",
      link: "/competitions/art-competition-2025/rang",
    },
    {
      id: "nritya",
      title: "Dance",
      description:
        "Nritya is an annual online Dance competition organized by Art Journal Foundation that aims to strengthen creative skills and express ideas and thoughts through Dance.",
      image: "/assets/images/competition/nritya.png",
      link: "/competitions/art-competition-2025/nritya",
    },
    {
      id: "natya",
      title: "Theatre",
      description:
        "Natya is Annual Online Theatre Competition organized by Art Journal Foundation that aims at enhancing creativity and motivation skills amongst school students.",
      image: "/assets/images/competition/natya.png",
      link: "/competitions/art-competition-2025/natya",
    },
    {
      id: "sargam",
      title: "Music",
      description:
        "Sargam is Annual Online Singing Competition organized by Art Journal Foundation that aims at enhancing creativity and motivation skills amongst school students.",
      image: "/assets/images/competition/sargam.png",
      link: "/competitions/art-competition-2025/sargam",
    },
    {
      id: "drishya",
      title: "Drishya",
      description:
        "Drishya is an annual online Scene Creation competition organized by Art Journal Foundation that aims at fostering creative aptitude and enthusiasm amongst young scholars.",
      image: "/assets/images/competition/Drishya.png",
      link: "/competitions/art-competition-2025/drishya",
    },
  ];

  return (
    <>
      {/* Page Header Start */}
      <section className="page-header" style={{
            backgroundImage:
              "url(/assets/images/backgrounds/AJF-Banner.png)",
          }}>
        <div
          className="page-header-bg"
        ></div>
        <div className="page-header-bubble">
          <img src="/assets/images/shapes/page-header-bubble.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link prefetch={false} href="/" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li style={{ color: "white" }}>The AJF Arts Competition 2025</li>
            </ul>
            <h2 style={{ color: "white" }}>The AJF Arts Competition 2025</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Form Start */}
      <section className="competition-form-page">
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>The AJF Arts Competition 2025</h2>
              <br />

              {/* Logo + Tagline + About Paragraph */}
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <img
                  src="/assets/images/competition/Dublieu.png"
                  alt="AJF Logo"
                  style={{
                    width: "120px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <h5 style={{ fontWeight: 300, marginBottom: "8px" }}>
                  Extra-curricular Partner
                </h5>
                <p
                  style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    fontSize: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  On students' demand ... we are happy to extend the
                  registration and submission deadline for The AJF Arts
                  Competition to 25th October. <br />
                  The results shall now be announced on 25th November.
                </p>
              </div>

              {/* Existing Competition Details */}
              <br />
              <p>The competition is open to school students from Grades 1 to 12.</p>
              <p>
                A student may participate in one or more groups (Rang - Visual
                Arts, Nritya - Dance, Natya - Theatre, Sargam - Music, and
                Drishya - Scene Creation).
              </p>
              <p>
                The registration, submission, and judgement for each category is
                separate.
              </p>
            </div>
          </div>

          <div className="row competition-icon justify-content-center text-center mt-5">
            {competitions.map((comp) => (
              <div
                key={comp.id}
                className="col-xl-2 col-lg-2 d-flex flex-column align-items-center justify-content-between mb-4"
              >
                <Link prefetch={false} href="#">
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="img-fluid"
                  />
                </Link>
                <h2 style={{ color: "orange" }} className="pt-2">
                  {comp.title}
                </h2>
                <p>{comp.description}</p>
                <Link
                  prefetch={false}
                  href={comp.link}
                  className="feature-one__btn mt-auto"
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px 20px",
                    fontSize: "10px",
                    display: "inline-block",
                  }}
                >
                  Register Here &gt;&gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Form End */}
    </>
  );
};

export default withLayout(CompetitionPage);

