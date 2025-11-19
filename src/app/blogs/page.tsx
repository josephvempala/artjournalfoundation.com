import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const blogs = [
    {
      title: "The process and the product",
      image: "/assets/images/blog/blog-1.webp",
      author: "ADMIN",
      authorImage: "/assets/images/blog/blog-avater/female1.jpg",
      link: "/blogs/the-process-and-the-product",
    },
    {
      title: "Experiment/Development",
      image: "/assets/images/blog/blog-2.webp",
      author: "NEHA RAUTELA",
      authorImage: "/assets/images/blog/blog-avater/female1.jpg",
      link: "/blogs/experimental-development",
    },
    {
      title: "How emotions impact artwork?",
      image: "/assets/images/blog/blog-3.webp",
      author: "NEHA RAUTELA",
      authorImage: "/assets/images/blog/blog-avater/female1.jpg",
      link: "/blogs/how-emotion-impact-artwork",
    },
    {
      title: "Creative Economy & the rising need for a creative curriculum",
      image: "/assets/images/blog/blog-4.webp",
      author: "Vaishak M Raj",
      authorImage: "/assets/images/blog/blog-avater/male1.jpg",
      link: "/blogs/creative-economy-and-the-rising-need-for-a-creative-curriculum",
    },
    {
      title: "Art: A Space for Expression, Not Competition",
      image: "/assets/images/blog/blog-5.webp",
      author: "Samuel Ohene-Sarfo",
      authorImage: "/assets/images/blog/blog-avater/male1.jpg",
      link: "/blogs/art-a-space-for-expression-not-competition",
    },
    {
      title: "Observation and visualization : Transform and redefine learning",
      image: "/assets/images/blog/blog-6.png",
      author: "Deepti Bedi",
      authorImage: "/assets/images/blog/blog-avater/female1.jpg",
      link: "/blogs/observation-and-visualization",
    },
    {
      title: "Spirituality in Abstract Painting: Syed Haider Raza",
      image: "/assets/images/blog/blog-5.webp",
      author: "Tanisha Desai",
      authorImage: "/assets/images/blog/blog-avater/female1.jpg",
      link: "/blogs/spirituality-in-abstract-painting",
    },
    {
      title: "Book Covers As A Mode Of Authorial Communication: An Analysis Of The Principles Of Design With Reference To Select Novels",
      image: "/assets/images/blog/blog-6.png",
      author: "Nikitha Srinivas Karnati",
      authorImage: "/assets/images/blog/blog-avater/female1.jpg",
      link: "/blogs/an-analysis-of-the-principles-of-design",
    },
    {
      title: "“Perspective and Perception” : The Art of Optical Illusions",
      image: "/assets/images/blog/blog-1.webp",
      author: "S.Vijayaraghavan",
      authorImage: "/assets/images/blog/blog-avater/male1.jpg",
      link: "/blogs/perspective-and-perception",
    },
  ];

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
              <li>Blogs</li>
            </ul>
            <h2>Blogs</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Blog Section Start */}
      <section className="wpo-blog-section section-padding">
        <div className="container">
          <div className="wpo-blog-items">
            <div className="row">
              {blogs.map((blog, index) => (
                <div key={index} className="col col-lg-4 col-md-6 col-12">
                  <div className="wpo-blog-item">
                    <div className="wpo-blog-img">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={370}
                        height={250}
                      />
                    </div>
                    <div className="wpo-blog-content">
                      <div className="wpo-blog-content-top">
                        <h2>
                          <Link prefetch={false} href={blog.link}>{blog.title}</Link>
                        </h2>
                      </div>
                      <div className="wpo-blog-content-btm">
                        <div className="wpo-blog-content-btm-left">
                          <div className="wpo-blog-content-btm-left-img">
                            <Image
                              src={blog.authorImage}
                              alt={blog.author}
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="wpo-blog-content-btm-left-text">
                            <h4>
                              <a>{blog.author}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </>
  );
};

export default BlogPage;
