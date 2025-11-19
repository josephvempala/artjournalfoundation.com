import Link from "next/link";
import Image from "next/image";
import ArtPractitionerForm from "./ArtPractitionerForm";

const ArtPractitionerPage = () => {
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
              <li>
                <Link prefetch={false} href="/student">I am a student</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Student Art Practitioner</li>
            </ul>
            <h2>Student Art Practitioner</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Student Form Start */}
      <section className="student-form-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <ul>
                <li>
                  Need support for planning any piece of art / interviewing an
                  art practitioner for any study/ submission/ plan your
                  art-based journey?
                </li>
                <li>Connect with experts for advice/guidance.</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <Image
                src="/assets/images/home/student.webp"
                alt="Student"
                width={570}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="col-xl-6 col-lg-6">
              <ArtPractitionerForm />
            </div>
          </div>
        </div>
      </section>
      {/* Page Two End */}
    </>
  );
};

export default ArtPractitionerPage;
