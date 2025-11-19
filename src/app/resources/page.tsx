import Link from "next/link";

const ResourcesPage = () => {
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
              <li>Resources</li>
            </ul>
            <h2>Resources</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Resources Content Start */}
      <section className="resources-content" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="section-title__title">
                Welcome to our Resources Hub
              </h3>
              <p>
                This section is dedicated to providing valuable resources for
                students, teachers, and art enthusiasts.
              </p>
              <p>
                The original site structure did not contain a single main
                resource page, but linked directly to sub-sections like Blogs.
              </p>

              <h4 style={{ marginTop: "30px" }}>Explore our Resources:</h4>
              <ul className="list-unstyled">
                <li style={{ marginBottom: "10px" }}>
                  <Link prefetch={false} href="/blogs" className="thm-btn">
                    Blogs & Articles
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link prefetch={false} href="#" className="thm-btn">
                    Research Papers (Placeholder)
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link prefetch={false} href="#" className="thm-btn">
                    Curriculum Guides (Placeholder)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Resources Content End */}
    </>
  );
};

export default ResourcesPage;
