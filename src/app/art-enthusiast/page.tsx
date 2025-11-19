import Link from "next/link";
import Image from "next/image";

const ArtEnthusiastPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/student-banner1.webp)",
          }}
        ></div>
        <div className="page-header-bubble">
          <Image
            src="/assets/images/shapes/page-header-bubble.png"
            alt="Bubble"
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
              <li>I am an Art Enthusiast</li>
            </ul>
            <h2>I am an Art Enthusiast</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Services Page 1 Start */}
      <section className="services-page-1">
        <div className="container">
          <div className="row">
            {/* Services Two single Start */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <Image
                      src="/assets/images/home/art-enthusiast.webp"
                      alt="art-enthusiast-article"
                      width={370}
                      height={270}
                    />
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <Link prefetch={false} href="/art-enthusiast/article">
                      I want to contribute an Article
                    </Link>
                  </h3>
                  <p className="services-two__text">
                    Artists/Art Enthusiasts can contribute any articles based on
                    any form/ details/ experience about Art that shall serve as
                    a reading aid to students/ teachers to enhance their
                    learning and knowledge about the subject.
                  </p>
                  <Link
                    prefetch={false}
                    href="/art-enthusiast/article"
                    className="services-two__btn"
                  >
                    Knock Knock
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two single End */}
            {/* Services Two single Start */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <Image
                      src="/assets/images/home/art-enthusiast.webp"
                      alt="art-enthusiast-speaker"
                      width={370}
                      height={270}
                    />
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <Link prefetch={false} href="/art-enthusiast/speaker">
                      I want to contribute as a speaker for a workshop/ webinar
                      that Art Journal Foundation may host
                    </Link>
                  </h3>
                  <p className="services-two__text">
                    The webinar/ workshop will relate to topics of interest and
                    requirement for students and teachers who wish to build on
                    their existing knowledge/ gain an insight into the said
                    topic.
                  </p>
                  <Link
                    prefetch={false}
                    href="/art-enthusiast/speaker"
                    className="services-two__btn"
                  >
                    Knock Knock
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two single End */}
            {/* Services Two single Start */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <Image
                      src="/assets/images/home/art-enthusiast.webp"
                      alt="art-enthusiast-artwork-process"
                      width={370}
                      height={270}
                    />
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <Link prefetch={false} href="/art-enthusiast/artwork-process">
                      I wish to contribute Artwork with the process
                    </Link>
                  </h3>
                  <p className="services-two__text">
                    Artists may contribute their Artwork with the intention to
                    serve as an inspiration for the student community.
                  </p>
                  <Link
                    prefetch={false}
                    href="/art-enthusiast/artwork-process"
                    className="services-two__btn"
                  >
                    Knock Knock
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two single End */}
          </div>
        </div>
      </section>
      {/* Services Page 1 End */}
    </>
  );
};

export default ArtEnthusiastPage;
