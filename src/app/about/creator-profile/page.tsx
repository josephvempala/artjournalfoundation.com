import Link from "next/link";
import React from "react";
import Accordion from "../../../components/Accordion";

const CreatorProfilePage = () => {
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
              <li>Creator Traits</li>
            </ul>
            <h1>Creator Traits</h1>
          </div>
        </div>
      </section>

      <section className="faq-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Creator Traits</h2>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="faq-page__left">
                <Accordion>
                  {/* Be the Creator */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Be the Creator</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          A set of expected traits from an art enthusiast that
                          may define his identity and working style. An
                          individual striving to be an artist must carry these
                          attributes to create work that may make a difference
                          to himself and to the community around him.
                        </p>
                        <p>
                          Creators of art pieces must strive to attain and
                          enhance on the creator profile.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Observer */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Observer</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who are able to appreciate the world
                          around without any bias or stereotypes.
                        </p>
                        <p>
                          An observer would bring into an art piece the best of
                          every world.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Imaginative */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Imaginative</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who contribute to evolution by visualizing
                          what may have never happened & what may never happen.
                        </p>
                        <p>
                          An imaginative artist would use one’s thoughts and
                          feelings to create something bold, new and better with
                          the hope of stimulating change.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visualizer */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Visualizer</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who are able to create an art piece to
                          convey or communicate a message.
                        </p>
                        <p>
                          A visualizer would be able to bring in innovation by
                          creating art pieces that were once just a
                          thought/idea.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Thinker */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Thinker</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who are able to come up with new ideas by
                          drawing inspiration from the world around them.
                        </p>
                        <p>
                          A thinker would analyze the various aspects of the
                          world around and create or perform not only in their
                          own interest, rather seek a positive change that
                          affects the wider society.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conceptualizer */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Conceptualizer</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who are able to formulate a new idea or a
                          concept.
                        </p>
                        <p>
                          A Conceptualizer would bring to reality a thought that
                          may have bred in his mind out of an inspiration or
                          even from nowhere.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Risk Taker */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Risk Taker</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who are able to conceptualize ideas
                          without the fear of falling apart.
                        </p>
                        <p>
                          A risk taker would be ready to explore new ideas to
                          create pieces that may stand out from others without
                          the fear of being rejected.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Open-Minded */}
                  <div className="accrodion last-chiled active">
                    <div className="accrodion-title">
                      <h4>Open-Minded</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Individuals who are open to accept others’ ideas, try
                          out new things, and respect the individuality of other
                          individuals and communities.
                        </p>
                        <p>
                          An open-minded artist would not fall back from
                          appreciating others’ art and various art forms.
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

export default CreatorProfilePage;
