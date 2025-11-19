import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Simplified navigation structure based on reference/frontend/layouts/navbar.blade.php
  return (
    <div className="page-wrapper">
      <header className="main-header clearfix">
        <div className="main-header__top">
          <div className="main-header__top-social-box">
            <div className="container">
              <div className="main-header__top-social-box-inner">
                <p className="main-header__top-social-text">
                  <Link
                    prefetch={false}
                    href="/creator-art-award"
                    style={{ animation: "flash 1s infinite", color: "black" }}
                  >
                    <i className="fi ti-hand-point-up">
                      1-1 Mentorship Program for IB Arts Educators
                    </i>
                  </Link>
                </p>
                <div className="main-header__top-social">
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
          </div>
          <div className="main-header__top-details">
            <div className="container">
              <div className="main-header__top-details-inner">
                <div className="main-header__logo">
                  <Link prefetch={false} href="/">
                    <img
                      src="/assets/images/resources/logo-1.png"
                      alt="Art Journal Foundation"
                      height={90}
                      width={90}
                    />
                  </Link>
                </div>
                <ul className="list-unstyled main-header__top-details-list">
                  <li>
                    <div className="icon">
                      <span className="icon-message"></span>
                    </div>
                    <div className="text">
                      <h5>
                        <a href="mailto:artjournalfoundation@gmail.com">
                          artjournalfoundation@gmail.com
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-phone-call"></span>
                    </div>
                    <div className="text">
                      <h5>
                        <a href="tel:+918238553855">+91 82 3855 3855</a>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Link prefetch={false} href="/">
                        <Image
                          src="/assets/images/resources/Startup India.png"
                          alt="startup India"
                          width={100}
                          height={80}
                        />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu clearfix">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner clearfix">
                <div className="main-menu__left">
                  <div className="main-menu__main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars"></i>
                    </a>
                    <ul className="main-menu__list">
                      <li>
                        <Link prefetch={false} href="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">About us</a>
                        <ul>
                          <li>
                            <Link prefetch={false} href="/about/who-we-are">Who we are?</Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/about/our-team">Meet Our Team</Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/about/mission-vision">
                              Mission Vision
                            </Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/about/core-values">Core Values</Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/about/creator-profile">
                              Creator Traits
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Events and Workshops</a>
                        <ul>
                          <li>
                            <Link prefetch={false} href="/events-workshops/aesthete-conclave-2024">
                              Aesthete Conclave 2024
                            </Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/events-workshops/1-1-mentorship-program-for-ib-arts-educators">
                              1-1 Mentorship Program for IB Arts Educators
                            </Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/events-workshops/spark-creativity-result-2025">
                              Spark Creativity Result 2025
                            </Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/events-workshops/aesthete-conclave-2025">
                              Aesthete Conclave 2025
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Competitions</a>
                        <ul>
                          <li>
                            <Link prefetch={false} href="/competitions/art-competition-2025">
                              AJF Art Competition 2025
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Resources</a>
                        <ul>
                          <li>
                            <Link prefetch={false} href="/blogs">Blogs</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Gallery</a>
                        <ul>
                          <li>
                            <Link prefetch={false} href="/gallery/artworks">Artworks</Link>
                          </li>
                          <li>
                            <Link prefetch={false} href="/gallery/performances">
                              Performances
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://courses.artjournalfoundation.co.in/"
                          target="_blank"
                        >
                          Courses
                        </a>
                      </li>
                      <li>
                        <Link prefetch={false} href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </div>
  );
};

export default Navbar;
