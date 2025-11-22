import Link from "next/link";
import Image from "next/image";
import SpeakerForm from "@/components/art-enthusiast/SpeakerForm";
import withLayout from "@/components/layout";


const SpeakerPage = () => {
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
                <Link prefetch={false} href="/art-enthusiast">I am an Art Enthusiast</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Contribute as a Speaker for a Workshop/Webinar</li>
            </ul>
            <h2>Contribute as a Speaker for a Workshop/Webinar</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Form Start */}
      <section className="student-form-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <ul>
                <li>
                  The webinar/ workshop will relate to topics of interest and
                  requirement for students and teachers who wish to build on
                  their existing knowledge/ gain an insight into the said topic.
                  These should align with the vision of Art Journal Foundation
                  to be able to create a focus on process over Product.
                </li>
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
              <SpeakerForm />
            </div>
          </div>
        </div>
      </section>
      {/* Form End */}
    </>
  );
};

export default withLayout(SpeakerPage);
