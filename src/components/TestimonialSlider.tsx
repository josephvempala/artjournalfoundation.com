"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialData {
  name: string;
  quote: string;
  imageSrc: string;
}

// Data extracted from the active carousel-item in src/app/page.tsx (lines 322-364)
const testimonials: TestimonialData[] = [
  {
    name: "Vaishak M",
    quote:
      '"Art Journal has played a pivotal role in nurturing and fostering best practices in the art education field. Their vision and approach towards developing a world-class community of art educators and providing insights to budding art students and inquirers is worth appreciating."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  // Placeholder for other testimonials based on reference structure (9 total slides expected)
  {
    name: "Vaidehi Harip",
    quote:
      '"I have attended 2 workshops under Art Journal Foundation. It was a great experience to get detailed information about the IB portfolio requirements in a structured way. I really thank Art Journal Foundation for conducting such wonderful workshops and the resource person sharing his/her expertise. I will recommend Art Journal foundation to my other colleagues as well."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "Getsy Bijoy",
    quote:
      '"The session with Mr. Nirav Patel and Ms. Ruchira Banka was awesome. Their vision and approach towards developing a world-class community of arts educators helped me clear a lot of doubts."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "Namrata Baheti",
    quote:
      '"Art Journal Foundation has a unique mission. It’s a great platform for my daughter to showcase her talent in Art."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "Padmaja Dubey",
    quote:
      '"The session with Vaishak Raj was awesome, for a novice like me, who has just stepped into the world of MYP art education, his small pointers and examples helped clear a lot of doubts. Thank you Ruchira and the Arts Journal foundation for the wonderful workshops that you keep doing."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "Shalaka Ambekar",
    quote:
      '"It was a well-organized and engaging workshop on IBDP Visual Arts Process Portfolio and Comparative Study. Mr. Subrata Ghosh and the entire art Art journal team have put effort into creating a positive and enriching environment. The content shared was to the point and effective. Also, interactive and open interactions would definitely recommend for those who are willing to learn and share their practices, Thank you!"',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "Ms. Savitri Potluri",
    quote:
      '"I appreciate the members of the Art Journal Foundation for conducting the sessions and webinars for the Visual Arts students and teachers to develop their skills and growth mindset. This will help them master their craft and succeed in life. This initiative taken by the Foundation has resulted in creating a support platform for our Visual Art students and teachers alike. The session taken by Mr Nirav Patel for our MYP Year 5 Visual Arts students was very productive, and helped the students in understanding the IB requirements in creating a Visual Arts e-portfolio. I wish the Art Journal Foundation all the best for their future endeavours."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "Sona Sakthi",
    quote:
      '"I appreciate Art journal to start such sessions where art teacher are joining together. I attached two sessions both were helpful. Thank you for the team."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
  {
    name: "S. Shrikant",
    quote:
      '"It was an eye opening session. Came to know different research platforms that students can be explore. Thank you Art Journal Foundation."',
    imageSrc:
      "https://static.artjournalfoundation.com/testimonial/testimonial.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <section style={{ paddingTop: "120px" }}>
      <div className="container text-center">
        <div className="section-title text-center">
          <span className="section-title__tagline">Testimonials</span>
          <h2 className="section-title__title">What People Say About Us</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Scrollbar]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="carousel slide carousel-dark" // Keep original classes for potential CSS hooks
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #007BFF",
                    marginBottom: "15px",
                  }}
                />
                <div
                  style={{
                    maxWidth: "80%",
                    textAlign: "center",
                    overflowY: "auto",
                  }}
                >
                  <p style={{ fontStyle: "italic" }}>{testimonial.quote}</p>
                </div>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  - {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots are handled by the module, but we need to ensure the container structure 
            from the reference is present if the module doesn't render it exactly as expected.
            The reference has a specific structure for dots:
            <div style="padding-top: 30px;">
               <ol class="carousel-indicators" ...>...</ol>
            </div>
            I will rely on the Pagination module for now, as it's the standard way.
        */}
      </div>
    </section>
  );
};

export default TestimonialSlider;
