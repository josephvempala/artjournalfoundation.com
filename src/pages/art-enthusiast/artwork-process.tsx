import Link from "next/link";
import Image from "next/image";
import ArtworkProcessForm from "@/components/art-enthusiast/ArtworkProcessForm";
import withLayout from "@/components/layout";


const ArtworkProcessPage = () => {
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
              <li>Contribute contribute Artwork with the Process</li>
            </ul>
            <h2>Contribute contribute Artwork with the Process</h2>
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
                  Artists may contribute their Artwork with the intention to
                  serve as an inspiration for the student community.
                </li>
                <li>
                  Selected Artwork shall be published in the gallery of the Art
                  Journal Foundation website.
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
              <ArtworkProcessForm />
            </div>
          </div>
        </div>
      </section>
      {/* Form End */}
    </>
  );
};

export default withLayout(ArtworkProcessPage);
