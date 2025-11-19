import Link from "next/link";

const CompetitionPage = () => {
  // Static competition data extracted from the Blade template
  const competitions = [
    {
      title: "Rang Edition 2",
      image: "/assets/images/services/services-2-1.webp",
      link: "#",
    },
    {
      title: "Creator Art Award 2022",
      image: "/assets/images/services/services-2-2.webp",
      link: "#",
    },
    {
      title: "Nritya",
      image: "/assets/images/services/services-2-3.webp",
      link: "#",
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
              <li>Competition</li>
            </ul>
            <h2>Competitions</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Services Page 1 Start */}
      <section className="services-page-1">
        <div className="container">
          <div className="row">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${100 * (index + 1)}ms`}
              >
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src={comp.image} alt={comp.title} />
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <Link prefetch={false} href={comp.link}>{comp.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Page 1 End */}
    </>
  );
};

export default CompetitionPage;
