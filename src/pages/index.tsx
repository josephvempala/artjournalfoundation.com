import Link from "next/link";
import MainSlider from "@/components/MainSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import BlogSlider from "@/components/BlogSlider";
import Image from "next/image";
import withLayout from "@/components/layout";

const HomePage = () => {
  return (
    <>
    <MainSlider />
      {/* Feature One Start */}
      <section className="feature-one">
        <div className="container">
          <div className="row">
            {/* Feature One single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="feature-one__single">
                <div className="feature-one-single-bg"></div>
                <Image
                  src="/assets/images/home/student.webp"
                  alt="Student"
                  height={240}
                  width={330}
                />
                <div className="feature-one__title-box">
                  <div className="feature-one__title-border"></div>
                  <h3 className="feature-one__title">
                    <Link prefetch={false} href="/student">I am a student</Link>
                  </h3>
                </div>
                <div className="feature-one__btn-box">
                  <Link prefetch={false} href="/student" className="feature-one__btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            {/* Feature One single End */}
            {/* Feature One single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-one__single">
                <div className="feature-one-single-bg"></div>
                <Image
                  src="/assets/images/home/teacher.webp"
                  alt="Teacher"
                  height={240}
                  width={330}
                />
                <div className="feature-one__title-box">
                  <div className="feature-one__title-border"></div>
                  <h3 className="feature-one__title">
                    <Link prefetch={false} href="/teacher">I am a Teacher</Link>
                  </h3>
                </div>
                <div className="feature-one__btn-box">
                  <Link prefetch={false} href="/teacher" className="feature-one__btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            {/* Feature One single End */}
            {/* Feature One single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one-single-bg"></div>
                <Image
                  src="/assets/images/home/art-enthusiast.webp"
                  alt="Art Enthusiast"
                  height={240}
                  width={330}
                />
                <div className="feature-one__title-box">
                  <div className="feature-one__title-border"></div>
                  <h3 className="feature-one__title">
                    <Link prefetch={false} href="/art-enthusiast">I am an Art Enthusiast</Link>
                  </h3>
                </div>
                <div className="feature-one__btn-box">
                  <Link prefetch={false} href="/art-enthusiast" className="feature-one__btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            {/* Feature One single End */}
          </div>
        </div>
      </section>
      {/* Feature One End */}

      {/* Welcome One Start */}
      <section className="welcome-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome-one__left">
                <div
                  className="welcome-one__bg"
                  style={{
                    backgroundImage:
                      "url(/assets/images/backgrounds/welcome-one-bg.png)",
                  }}
                ></div>
                <div
                  className="welcome-one__main-box wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="welcome-one__circle-one"></div>
                  <div className="welcome-one__img-1">
                    <Image
                      src="/assets/images/resources/welcome-main.png"
                      alt="Art Journal Foundation"
                      height={677}
                      width={455}
                    />
                    <div className="welcome-one__small-img-1 float-bob-x">
                      <Image
                        src="/assets/images/resources/welcome2.jpg"
                        alt="Art Journal Foundation"
                        height={206}
                        width={206}
                      />
                    </div>
                    <div className="welcome-one__small-img-2 float-bob-y">
                      <Image
                        src="/assets/images/resources/welcome1.jpg"
                        alt="Art Journal Foundation"
                        height={167}
                        width={167}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    Create the Creator
                  </span>
                  <h2 className="section-title__title">
                    Welcome to Art Journal Foundation
                  </h2>
                </div>
                <p className="welcome-one__text-1">
                  What is Art Journal Foundation?
                </p>
                <p className="welcome-one__text-2">
                  Art Journal Foundation is a creative platform by Elevating Art
                  Pvt. Ltd. that supports the process, practice, and education
                  in Arts and Culture across the globe. Art Journal Foundation
                  shall help to create resources and serve as a support platform
                  for students, teachers, and Art enthusiasts.
                </p>
                <div className="welcome-one__points-box">
                  <ul className="list-unstyled welcome-one__points">
                    <li>
                      <div className="icon">
                        <span className="icon-tick"></span>
                      </div>
                      <div className="text">
                        <p>We are Committed</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick"></span>
                      </div>
                      <div className="text">
                        <p>Highly Rated Events</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-unstyled welcome-one__points welcome-one__points-two">
                    <li>
                      <div className="icon">
                        <span className="icon-tick"></span>
                      </div>
                      <div className="text">
                        <p>Art Workshops</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick"></span>
                      </div>
                      <div className="text">
                        <p>Trusted Professionals</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="welcome-one__btn-call-box">
                  <div className="welcome-one__btn-box">
                    <Link prefetch={false} href="/about/our-team" className="thm-btn welcome-one__btn">
                      Read more <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome One End */}

      {/*Past events and workshop start*/}
      <section className="past-events-placeholder">
        {/* Content from @include('frontend.event-and-workshop.past-events.past-events') */}
      </section>
      {/*Past events and workshop end*/}

      {/* Counter One Start */}
      <section className="counter-one">
        <div className="container">
          <div
            className="counter-one__inner wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="counter-one-bg-1"
              style={{
                backgroundImage:
                  "url(/assets/images/backgrounds/counter-one-bg-1.png)",
              }}
            ></div>
            <div
              className="counter-one-bg-2"
              style={{
                backgroundImage:
                  "url(/assets/images/backgrounds/counter-one-bg-2.png)",
              }}
            ></div>
            <ul className="list-unstyled counter-one__list">
              <li>
                <div className="counter-one__icon">
                  <span className="icon-teamwork"></span>
                </div>
                <div className="counter-one__count-box">
                  <div className="counter-one__count-box-inner">
                    <h3 className="odometer" data-count="4000">
                      4000
                    </h3>
                    <span className="counter-one__plus">+</span>
                  </div>
                  <p className="counter-one__text">Teacher Community</p>
                </div>
              </li>
              <li>
                <div className="counter-one__icon">
                  <span className="icon-teamwork"></span>
                </div>
                <div className="counter-one__count-box">
                  <div className="counter-one__count-box-inner">
                    <h3 className="odometer" data-count="400000">
                      400000
                    </h3>
                    <span className="counter-one__plus">+</span>
                  </div>
                  <p className="counter-one__text">Student Community</p>
                </div>
              </li>
              <li>
                <div className="counter-one__icon">
                  <span className="icon-trophy"></span>
                </div>
                <div className="counter-one__count-box">
                  <div className="counter-one__count-box-inner">
                    <h3 className="odometer" data-count="165">
                      165
                    </h3>
                    <span className="counter-one__plus">+</span>
                  </div>
                  <p className="counter-one__text">Events Hosted</p>
                </div>
              </li>
              <li>
                <div className="counter-one__icon">
                  <span className="icon-location"></span>
                </div>
                <div className="counter-one__count-box">
                  <div className="counter-one__count-box-inner">
                    <h3 className="odometer" data-count="55">
                      55
                    </h3>
                    <span className="counter-one__plus">+</span>
                  </div>
                  <p className="counter-one__text">Country Outreach</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      {/* Counter One End */}

      {/* Global Reach Section - Simplified map logic to static image */}
      <section style={{ textAlign: "center", position: "relative" }}>
        <h2>Our Global Reach</h2>
        <br />
        <br />
        <div
          id="world-map-container"
          style={{ position: "relative", display: "inline-block" }}
        >
          <Image
            id="world-map-image"
            src="/assets/images/home/World Map_1.png"
            alt="World Map"
            width={800}
            height={400}
          />
          <div
            className="country-pointer"
            data-country="Nepal"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "180px",
              left: "565px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="India"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "210px",
              left: "550px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="USA"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "165px",
              left: "140px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="Dubai"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "195px",
              left: "495px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="Indonisia"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "255px",
              left: "630px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="Australia"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "310px",
              left: "680px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="vietnam"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "220px",
              left: "615px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="Ghana"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "240px",
              left: "380px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="Italy"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "150px",
              left: "400px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="country-pointer"
            data-country="Zambia"
            style={{
              backgroundImage: `url("https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png")`,
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "285px",
              left: "435px",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          ></div>
        </div>
      </section>
      {/* Global Reach Section End */}

      <TestimonialSlider />

      {/* Video Testimonials Section - Simplified to static video elements */}
      <section>
        <div className="container mt-5 pb-5">
          <h2 className="text-center mb-4"></h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <video
                    width="100%"
                    height="250"
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                  >
                    <source
                      src="https://static.artjournalfoundation.com/testimonial/Vaishak.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="card-footer">
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Vaishak M
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <video
                    width="100%"
                    height="250"
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                  >
                    <source
                      src="https://static.artjournalfoundation.com/testimonial/BhargaviG.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="card-footer">
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Bhargavi Gopalan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Testimonials Section End */}

      <BlogSlider />
      {/* Blog One End */}
      </>
  );
};

export default withLayout(HomePage);
