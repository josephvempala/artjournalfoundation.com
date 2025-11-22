import Link from "next/link";
import withLayout from "@/components/layout";


const ExperimentalDevelopmentPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
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
              <li>
                <Link prefetch={false} href="/blogs">Blogs</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Experiment/Development</li>
            </ul>
            <h2>Experiment/Development</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Blog Details Start */}
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="blog-details__left">
                <div className="blog-details__content">
                  <h3 className="blog-details__title">
                    Experiment/Development
                  </h3>
                  <p className="blog-details__text-1">
                    <iframe
                      src="/assets/images/blog/blog-2/blog-2.pdf"
                      width="100%"
                      height="600px"
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details End */}
    </>
  );
};

export default withLayout(ExperimentalDevelopmentPage);
