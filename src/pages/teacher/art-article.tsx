import Link from "next/link";
import Image from "next/image";
import ArtArticleForm from "@/components/teacher/ArtArticleForm";
import withLayout from "@/components/layout";


const ArtArticlePage = () => {
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
                <Link prefetch={false} href="/teacher">I am a Teacher</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Contribute an Article</li>
            </ul>
            <h2>Contribute an Article</h2>
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
                  Teachers can contribute any articles based on any form/
                  details/ experience about Art that shall serve as a reading
                  aid to students/ teachers to enhance their learning and
                  knowledge about the subject.
                </li>
                <li>
                  Only selected articles shall be uploaded on the website.
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
              <ArtArticleForm />
            </div>
          </div>
        </div>
      </section>
      {/* Form End */}
    </>
  );
};

export default withLayout(ArtArticlePage);
