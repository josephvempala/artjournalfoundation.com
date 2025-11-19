import TurnstileWidget from "@/components/Turnstile";
import Link from "next/link";

const ContactUsPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.webp)",
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
              <li>Contact Us</li>
            </ul>
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Contact Details Start */}
      <section className="contact-page-one-details">
        <div className="container">
          <ul className="list-unstyled contact-page-one-details__list">
            <li>
              <div className="contact-page-one-details__icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="contact-page-one-details__content-box">
                <p className="contact-page-one-details__content">
                  <a href="tel:+918238553855">+91 82 3855 3855</a>
                </p>
              </div>
            </li>
            <li>
              <div className="contact-page-one-details__icon">
                <span className="icon-message"></span>
              </div>
              <div className="contact-page-one-details__content-box">
                <p className="contact-page-one-details__content">
                  <a href="mailto:artjournalfoundation@gmail.com">
                    artjournalfoundation@gmail.com
                  </a>
                </p>
              </div>
            </li>
            <li>
              <div className="contact-page-one-details__icon">
                <span className="icon-location"></span>
              </div>
              <div className="contact-page-one-details__content-box">
                <h5 className="contact-page-one-details__address">
                  Prestige Ferns Residency <br /> Bangalore, India 560 102
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Contact Details End */}

      {/* Contact One Start */}
      <section className="contact-one">
        <div className="contact-one-shape-4 wow slideInLeft">
          <img src="/assets/images/shapes/contact-one-shape-4.png" alt="" />
        </div>
        <div className="contact-one__container">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="contact-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Connect with Art Journal Foundation
                    </span>
                    <h2 className="section-title__title">Contact us</h2>
                  </div>
                  <form className="contact-form-validated" method="POST" action="/api/forms">
                    <input type="hidden" name="formName" value="contact-form" />
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="text"
                            placeholder="Full name"
                            name="full_name"
                            id="full_name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="email"
                            placeholder="Your email"
                            name="your_email"
                            id="your_email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="text"
                            placeholder="Phone number"
                            name="contact_number"
                            id="contact_number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-one__form-input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Write message"
                            id="message"
                          ></textarea>
                        </div>
                        <div className="contact-one__btn-box">
                          <TurnstileWidget />
                          <button
                            type="submit"
                            className="thm-btn contact-one__btn"
                          >
                            Send a message <i className="fa fa-angle-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="contact-one__right">
                  <div className="contact-one-shape-1"></div>
                  <div className="contact-one-shape-2"></div>
                  <div className="contact-one-shape-3"></div>
                  <div className="contact-one__img">
                    <img src="/assets/images/resources/Contact_Us.png" alt="" />
                  </div>
                  <div className="contact-one__call">
                    <div className="contact-one__call-icon">
                      <span className="icon-phone-call"></span>
                    </div>
                    <div className="contact-one__call-content">
                      <p className="contact-one__call-sub-title">Call</p>
                      <h5 className="contact-one__call-number">
                        <a href="tel:+918238553855">+91 82 3855 3855</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact One End */}
    </>
  );
};

export default ContactUsPage;
