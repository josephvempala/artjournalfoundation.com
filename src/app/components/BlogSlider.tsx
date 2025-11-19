"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface BlogPostData {
  title: string;
  link: string;
  date: string;
  month: string;
  author: string;
  imageSrc: string;
}

// Data extracted from the first three blog posts in src/app/page.tsx (lines 447-563)
const blogPosts: BlogPostData[] = [
  {
    title: "The process and the product",
    link: "/blogs/the-process-and-the-product",
    date: "25",
    month: "Mar",
    author: "Admin",
    imageSrc: "/assets/images/blog/blog-1.webp",
  },
  {
    title: "Experiment/Development",
    link: "/blogs/experimental-development",
    date: "25",
    month: "Mar",
    author: "Neha Rautela",
    imageSrc: "/assets/images/blog/blog-2.webp",
  },
  {
    title: "How emotions impact artwork?",
    link: "/blogs/how-emotion-impact-artwork",
    date: "25",
    month: "Mar",
    author: "Neha Rautela",
    imageSrc: "/assets/images/blog/blog-3.webp",
  },
  // Placeholder for other blog posts based on reference structure (more than 3 expected)
  {
    title: "Creative Economy & the rising need for a creative curriculum",
    link: "/blogs/creative-economy-and-the-rising-need-for-a-creative-curriculum",
    date: "25",
    month: "Mar",
    author: "Vaishak M Raj",
    imageSrc: "/assets/images/blog/blog-4.webp",
  },
  {
    title: "Observation and visualization : Transform and redefine learning",
    link: "/blogs/observation-and-visualization",
    date: "10",
    month: "Oct",
    author: "Ms. Deepti Bedi",
    imageSrc: "/assets/images/blog/blog-5.webp",
  },
  {
    title: "Spirituality in Abstract Painting: Syed Haider Raza",
    link: "/blogs/spirituality-in-abstract-painting",
    date: "13",
    month: "June",
    author: "Tanisha Desai",
    imageSrc: "/assets/images/blog/blog-6.png",
  },
];

const BlogSlider = () => {
  const swiperOptions = {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".blog-one__carousel-next", // Custom class for next button
      prevEl: ".blog-one__carousel-prev", // Custom class for prev button
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="blog-one">
      <div
        className="blog-one-shape"
        style={{
          backgroundImage: "url(/assets/images/shapes/blog-one-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="section-title text-left">
          <span className="section-title__tagline">Latest News & Articles</span>
          <h2 className="section-title__title">Our Blogs</h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          {...swiperOptions}
          className="thm-owl__carousel blog-one__carousel" // Keep original classes
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index} className="blog-one__single">
              <div className="blog-one__img">
                <Image
                  height={256}
                  width={370}
                  src={post.imageSrc}
                  alt={post.title}
                />
                <Link prefetch={false} href={post.link}>
                  <span className="blog-one__plus"></span>
                </Link>
                <div className="blog-one__date">
                  <p>
                    {post.date} <br /> <span>{post.month}</span>
                  </p>
                </div>
              </div>
              <div className="blog-one__content">
                <ul className="list-unstyled blog-one__meta">
                  <li>
                    <a href="#">
                      <i className="far fa-user-circle"></i> by {post.author}{" "}
                    </a>
                  </li>
                </ul>
                <h3 className="blog-one__title">
                  <Link prefetch={false} href={post.link}>{post.title}</Link>
                </h3>
                <div className="blog-one__btn-box">
                  <Link prefetch={false} href={post.link}>
                    Read More <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSlider;
