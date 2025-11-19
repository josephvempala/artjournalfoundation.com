"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";

// Define the slide content component to keep the main component cleaner
const MainSliderSlide = () => {
  return (
    <>
      <div
        className="page-header-bg"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/main-slider.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: 10,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></div>
      <div className="main-slider-bubble">
        <div
          className="main-slider-bubble-bg"
          style={{
            backgroundImage:
              "url(/assets/images/shapes/main-slider-bubble-bg.png)",
          }}
        ></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="main-slider__content">
              <p className="main-slider__sub-title"></p>
              <h2 className="main-slider__title">
                Aesthete Conclave 2025
                <br />
              </h2>
              <div className="main-slider__btn-box">
                <Link
                  prefetch={false}
                  href="/events-workshops/aesthete-conclave-2025"
                  className="thm-btn main-slider__btn"
                >
                  Discover more <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MainSlider = () => {
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "slide",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets" as const, // Use 'as const' or ensure it matches the expected literal type
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider__swiper-button-next",
      prevEl: "#main-slider__swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
  };

  return (
    <section className="main-slider clearfix">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        {...swiperOptions}
        className="thm-swiper__slider" // Apply class from reference
      >
        <SwiperSlide>
          <MainSliderSlide />
        </SwiperSlide>
        {/* Duplicating the slide content to allow loop/nav/pagination to function as expected, 
            as the reference shows multiple slides.
        */}
        <SwiperSlide>
          <MainSliderSlide />
        </SwiperSlide>
      </Swiper>

      {/* Navigation elements from reference, placed outside Swiper component but inside section */}
      <div className="main-slider__nav">
        <div
          className="swiper-button-prev"
          id="main-slider__swiper-button-next"
        ></div>
        <div
          className="swiper-button-next"
          id="main-slider__swiper-button-prev"
          style={{ fontSize: 1 }}
        ></div>
      </div>
      {/* Pagination element is implicitly handled by the Pagination module, targeting #main-slider-pagination if needed, 
          but the navigation elements must have the correct IDs for the Navigation module.
      */}
    </section>
  );
};

export default MainSlider;
