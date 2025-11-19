import React from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbTitle: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, title, breadcrumbTitle }) => {
  return (
    <>
      {/* Page Header Start - Replicating Blade structure */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: `url(/assets/images/backgrounds/about-us-header.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top: 10,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></div>
        <div className="page-header-bubble">
          <img src="/assets/images/shapes/page-header-bubble.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link prefetch={false} style={{ color: 'black' }} href="/">
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li style={{ color: 'black' }}>{breadcrumbTitle}</li>
            </ul>
            <h2 style={{ color: 'black' }}>{title}</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Blog Content Section Start */}
      <section className="faq-page">
        <div className="container">
          {children}
        </div>
      </section>
      {/* Blog Content Section End */}
    </>
  );
};

export default BlogLayout;