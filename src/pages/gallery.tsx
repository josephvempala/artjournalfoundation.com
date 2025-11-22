import Link from "next/link";
import withLayout from "@/components/layout";


const GalleryPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/about-us-header.webp)",
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
              <li>Gallery</li>
            </ul>
            <h2>Gallery</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      <section className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Artworks</h5>
                <p className="card-text">
                  Explore a collection of beautiful artworks.
                </p>
                <Link prefetch={false} href="/gallery/artworks" className="btn btn-primary">
                  View Artworks
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Performances</h5>
                <p className="card-text">
                  Watch amazing performances by talented artists.
                </p>
                <Link prefetch={false} href="/gallery/performances" className="btn btn-primary">
                  View Performances
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withLayout(GalleryPage);
