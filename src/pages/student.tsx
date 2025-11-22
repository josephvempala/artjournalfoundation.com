import Link from "next/link";
import Image from "next/image";
import withLayout from "@/components/layout";


const StudentPage = () => {
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
              <li>I am a student</li>
            </ul>
            <h2>I am a student</h2>
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
                      src="/assets/images/home/student.webp"
                      alt="student-art-educator"
                      width={370}
                      height={270}
                    />
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <Link prefetch={false} href="/student/art-educator">
                      I want to connect to an Art Educator
                    </Link>
                  </h3>
                  <p className="services-two__text">
                    Need mentorship for completing your Board examination
                    submission/ coursework/ portfolio submission for any board
                    (CAIE/ IBMYP/ IBDP/ ISC/ ICSE/ CBSE etc.)?
                  </p>
                  <Link
                    prefetch={false}
                    href="/student/art-educator"
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
                      src="/assets/images/home/student.webp"
                      alt="student-art-practitioner"
                      width={370}
                      height={270}
                    />
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <Link prefetch={false} href="/student/art-practitioner">
                      I want to connect with an Art Practitioner
                    </Link>
                  </h3>
                  <p className="services-two__text">
                    Need support for planning any piece of art / interviewing an
                    art practitioner for any study/ submission/ plan your
                    art-based journey?
                  </p>
                  <Link
                    prefetch={false}
                    href="/student/art-practitioner"
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
                      src="/assets/images/home/student.webp"
                      alt="student-art-journal"
                      width={370}
                      height={270}
                    />
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <Link prefetch={false} href="/student/art-journal">
                      I want to display my Art Journal/ Process Journal
                    </Link>
                  </h3>
                  <p className="services-two__text">
                    The images/videos submitted here will be uploaded in the
                    gallery of the Art Journal Foundation website after a
                    process of selection and shall serve as a resource for
                    students and facilitators as an inspiration.
                  </p>
                  <Link
                    prefetch={false}
                    href="/student/art-journal"
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

export default withLayout(StudentPage);
