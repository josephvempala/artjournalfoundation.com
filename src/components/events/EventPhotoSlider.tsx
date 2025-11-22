"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface EventPhotoSliderProps {
  eventPhotos: string[];
}

const EventPhotoSlider = ({ eventPhotos }: EventPhotoSliderProps) => {
  return (
    <div
      className="section-container"
      style={{
        textAlign: "center",
        margin: "40px 0",
        padding: "30px",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
      }}
    >
      <h2
        className="section-title"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#31ced5",
        }}
      >
        Event Photos
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        {eventPhotos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: "100%",
                height: "400px",
                position: "relative",
              }}
            >
              <Image
                src={photo}
                alt={`Event Photo ${index + 1}`}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventPhotoSlider;
