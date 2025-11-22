import Link from "next/link";
import React from "react";
import Accordion from "../../components/Accordion";
import withLayout from "@/components/layout";


const CoreValuesPage = () => {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/about-us-header.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              <li>Core Values</li>
            </ul>
            <h1>Core Values</h1>
          </div>
        </div>
      </section>

      <section className="faq-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Core Values</h2>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="faq-page__left">
                <Accordion>
                  {/* Integrity */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Integrity : </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Adhering to higher standards of conduct and developing
                          a character of honesty, loyalty, and trustworthiness.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Respect */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Respect: </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Treating people with utmost dignity, valuing their
                          contributions, and promoting a culture that allows
                          each individual to rise to their fullest potential.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Support : </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Providing support by building a community of
                          like-minded individuals who share skills and knowledge
                          and believe in creating and innovating solutions to
                          problems.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Growth */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Growth :</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Fostering growth and development of individuals as
                          artists by using the Arts as a medium to enhance and
                          elevate the process of learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withLayout(CoreValuesPage);
