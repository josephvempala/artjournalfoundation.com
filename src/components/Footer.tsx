import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        className="site-footer-shape-1"
        style={{
          backgroundImage: "url(/assets/images/shapes/site-footer-shape-1.png)",
        }}
      ></div>
      <div className="site-footer-shape-two">
        <img src="/assets/images/shapes/site-footer-shape-2.png" alt="" />
      </div>
      <div className="site-footer__top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="footer-widget__column footer-widget__about">
                <Image
                  src="/assets/images/footer-logo.png"
                  alt="Art Journal Foundation"
                  height={45}
                  width={220}
                />
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">
                    Would you have any enquiries. Please feel free to contact
                    us.
                  </p>
                  <p>
                    <a href="mailto:artjournalfoundation@gmail.com">
                      {" "}
                      <span className="icon-message"></span>{" "}
                      artjournalfoundation@gmail.com{" "}
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918238553855">
                      {" "}
                      <span className="icon-phone-call"></span> +91 82 3855 3855{" "}
                    </a>
                  </p>
                  <p>
                    <span className="icon-location"></span> Prestige Ferns
                    Residency,
                    <br /> Haralur, Bangalore, India 560102
                  </p>
                </div>
                <div className="site-footer__social">
                  <a
                    href="https://www.facebook.com/art.journal.524"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/art-journal-42188a20a"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/artjournalfoundation"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@artjournalfoundation577"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__links clearfix">
                <h3 className="footer-widget__title">Quick Links</h3>
                <ul className="footer-widget__links-list list-unstyled clearfix">
                  <li>
                    <Link prefetch={false} href="/about/who-we-are">About us</Link>
                  </li>
                  <li>
                    <Link prefetch={false} href="/about/creator-profile">Creator Traits</Link>
                  </li>
                  <li>
                    <Link prefetch={false} href="/work-with-us">Work With us</Link>
                  </li>
                  <li>
                    <Link prefetch={false} href="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link prefetch={false} href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget__column footer-widget__articles clearfix">
                <h3 className="footer-widget__title">News & Articles</h3>
                <ul className="footer-widget__articles-list list-unstyled clearfix">
                  <li>
                    <div className="footer-widget__articles-img">
                      <Image
                        src="/assets/images/blog/blog-1.webp"
                        alt="The process and the product"
                        width={80}
                        height={50}
                      />
                      <Link prefetch={false} href="#">
                        <span className="fa fa-link"></span>
                      </Link>
                    </div>
                    <div className="footer-widget__articles-content">
                      <p className="footer-widget__articles-date">
                        25 Mar, 2023
                      </p>
                      <h5 className="footer-widget__articles-sub-title">
                        <Link prefetch={false} href="#">The process and the product...</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="footer-widget__articles-img">
                      <Image
                        src="/assets/images/blog/blog-2.webp"
                        alt="Experiment/Development"
                        width={80}
                        height={50}
                      />
                      <Link prefetch={false} href="#">
                        <span className="fa fa-link"></span>
                      </Link>
                    </div>
                    <div className="footer-widget__articles-content">
                      <p className="footer-widget__articles-date">
                        25 Jan, 2023
                      </p>
                      <h5 className="footer-widget__articles-sub-title">
                        <Link prefetch={false} href="#">Experiment/Development...</Link>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyright {currentYear} by{" "}
                  <Link prefetch={false} href="/">Art Journal Foundation</Link>- A Creative
                  Platform by Elevating Art Private Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
