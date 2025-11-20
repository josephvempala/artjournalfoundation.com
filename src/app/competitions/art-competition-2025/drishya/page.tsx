"use client";

import Link from "next/link";
import { useState } from "react";

const DrishyaPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("dom");
  const [grade, setGrade] = useState("");
  const [category, setCategory] = useState("");

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGrade = e.target.value;
    setGrade(selectedGrade);
    
    // Map grade to category
    const gradeNum = parseInt(selectedGrade);
    if (gradeNum >= 6 && gradeNum <= 8) setCategory("C (Grades 6 to 8)");
    else if (gradeNum >= 9 && gradeNum <= 12) setCategory("D (Grades 9 to 12)");
    else setCategory("");
  };

  return (
    <>
      {/* Page Header Start */}
      <section className="page-header" style={{
            backgroundImage:
              "url(/assets/images/backgrounds/Natya-Banner-1.png)",
             backgroundSize: "cover"
          }}>
        <div
          className="page-header-bg"

        ></div>
        <div className="page-header-bubble">
          <img src="/assets/images/shapes/page-header-bubble.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link prefetch={false} href="/" style={{ color: "black" }}>
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li style={{ color: "black" }}>The AJF Online Arts Competition 2025</li>
            </ul>
            <h2 style={{ color: "black" }}>Drishya Competition</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Form Start */}
      <section className="competition-form-page">
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>
                Art Journal Foundation Presents <br />
                Drishya 2025
              </h2>
              <br />
              <p>
                Drishya is an annual Scene Creation (Photography/ Video Art/
                Digital Animation/ Montage/ Stop Motion) competition organised
                by Art Journal Foundation that aims at fostering creative
                aptitude and enthusiasm amongst young students.
              </p>
              <p>
                Art Journal Foundation is a creative platform by Elevating Arts
                Private Limited that supports the process, practice, and
                education in Arts and Culture.
              </p>
              <p>
                We are committed to develop a resource platform that shall be
                useful in enhancing and encouraging creativity, critical
                investigations, explorations, and experiments.
              </p>
              <p>
                AJF aims to be the premier destination for artists to immerse in
                the creative process and develop skills.
              </p>
            </div>
          </div>
          <br />
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-xl-12 col-lg-12">
              <a
                href="/assets/images/competition/brochures/Drishya_2025.pdf"
                target="_blank"
              >
                <button className="btn btn-primary">
                  <i className="fa fa-download"></i> Download Brochure Here
                </button>
              </a>
            </div>
          </div>
          <br />
          <h2 style={{ color: "orange", textAlign: "center" }}>
            Art Journal Foundation Brings to you Drishya 2025
          </h2>
          <br />
          <div className="row mt-3">
            <div className="col-xl-6 col-lg-6">
              <h2 style={{ color: "orange" }}>Categories:</h2>
              <hr />
              <ul>
                <li>C: Grades 6, 7 and 8</li>
                <li>D: Grades 9, 10, 11 and 12</li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>Prizes:</h2>
              <hr />
              <p>- Two winners from each category will be awarded trophies.</p>
              <p>- All winners and participants will get eCertificates.</p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>Type of Entry: Individual</h2>
              <hr />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>
                Theme: Disconnected in a Connected World
              </h2>
              <hr />
              <p>
                We live in a world that seems more connected than ever, through
                phones, social media, and technology. Yet, many people feel more
                alone, unheard, or unseen.
              </p>
              <p>This theme invites you to explore this contrast.</p>
              <p>
                Think about what it means to be connected, yet feel
                disconnected. Is it about people ignoring each other in real
                life? Is it about being lost in screens? Or is it about finding
                new ways to truly connect?
              </p>
              <p>
                This category invites participants to express this theme through
                Photography, Video Art, Digital Animation, Montage, or Stop
                Motion
              </p>
              <p>
                Your creation should powerfully portray the feeling of
                disconnection in a connected world, using visual storytelling to
                evoke emotion, reflection, or a deeper understanding.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>Registration Fees:</h2>
              <hr />
              <p>- For students in India: 150 INR</p>
              <p>- For students in UAE: 15 AED</p>
              <p>- For students in any other country: 10 USD</p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>Instructions:</h2>
              <hr />
              <ul>
                <li>
                  1. Each participant is allowed to submit ONLY one entry for
                  Drishya.
                </li>
                <li>
                  2. Work must be original and created solely by the
                  participant.
                </li>
                <li>
                  3. Participants will be required to send a maximum 3 minutes
                  duration video (as applicable).
                </li>
                <li>
                  4. The Scene can be in any language (if applicable), but
                  non-English scenes should provide English Subtitles or a brief
                  translation.
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>Submission Guidelines:</h2>
              <hr />
              <ul>
                <li>
                  {" "}
                  1. The submission should be high resolution 300 DPI and free
                  from any technical glitches.
                </li>
                <li>
                  {" "}
                  2. Submissions to be uploaded on the submission link, that
                  will be received on your registered mail ID, maximum file size
                  150 MB.
                </li>
                <li>
                  {" "}
                  3. When submitting, please label your file with your name,
                  category for clear identification, for example:
                  Nameofthestudent_CategoryName_Drishya.mp4
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <h2 style={{ color: "orange" }}>Criteria for Judgement:</h2>
              <p>
                The Scene creation will be judged based on the following
                criteria:
              </p>
              <hr />
              <p>
                1. <strong>Adherence to Theme:</strong>Does the scene
                effectively capture the essence of “Disconnected in a Connected
                World”?
              </p>
              <p>
                2. <strong>Visual Impact:</strong> Is the scene visually
                striking and engaging? Does it effectively communicate its
                message through strong composition, colour and visuals?
              </p>
              <p>
                3. <strong>Creativity and Originality:</strong>Does the scene
                demonstrate innovative thinking and a unique approach to the
                theme?{" "}
              </p>
              <p>
                4. <strong>Technical Skill:</strong> Does the scene exhibit a
                high level of technical proficiency in the chosen medium
              </p>
              <p>
                5. <strong>Overall Effectiveness:</strong> Does the scene
                successfully convey its intended message? Is it impactful,
                thought-provoking, and memorable?
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-12 col-lg-12">
              <hr />
              <p>
                -{" "}
                <strong style={{ color: "orange" }}>
                  Last Date of Submission
                </strong>
                -25th October,2025
              </p>
              <p>
                -{" "}
                <strong style={{ color: "orange" }}>
                  Result Announcement
                </strong>
                -25th November, 2025{" "}
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="row mt-5">
            <div className="col-xl-12 col-lg-12">
              <div className="event-art-form">
                <form name="myForm">
                  <h2 style={{ color: "orange" }} className="subtitle-event">
                    Registration Details
                  </h2>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 mb-2">
                      <label htmlFor="student_name">
                        Student Name <span style={{ color: "#bf1212" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="student_name"
                        id="student_name"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mb-2">
                      <label htmlFor="school_name">
                        School Name <span style={{ color: "#bf1212" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="school_name"
                        id="school_name"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mb-2">
                      <label htmlFor="student_email">
                        Student/ Parent Mail ID (USE PERSONAL MAIL ID ONLY to
                        ensure that you receive the submission link)
                        <span style={{ color: "#bf1212" }}>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="student_email"
                        id="student_email"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mb-2">
                      <label htmlFor="student_contact">
                        Student/ Parent Contact Number{" "}
                        <span style={{ color: "#bf1212" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="student_contact"
                        id="student_contact"
                        required
                        defaultValue="+91 "
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mb-2">
                      <label htmlFor="grade">
                        Grade <span style={{ color: "#bf1212" }}>*</span>
                      </label>
                      <select
                        name="grade"
                        id="grade"
                        className="form-control"
                        onChange={handleGradeChange}
                        required
                        value={grade}
                      >
                        <option disabled value="">
                          Select Grade
                        </option>
                        <option value="6">Grade 6</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                      </select>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mb-2">
                      <label htmlFor="category">Category</label>
                      <input
                        type="text"
                        className="form-control"
                        name="category"
                        id="category"
                        required
                        readOnly
                        value={category}
                      />
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 mb-2">
                      <label htmlFor="place">
                        Place <span style={{ color: "#bf1212" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="place"
                        id="place"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 mb-2">
                      <label htmlFor="instagram_handle">Instagram Handle</label>
                      <input
                        type="text"
                        className="form-control"
                        name="instagram_handle"
                        id="instagram_handle"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <h2 style={{ color: "orange" }} className="subtitle-event">
                      Choose Your Payment Method
                    </h2>
                    <hr />
                    <div className="col-xl-12 col-12">
                      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        <li>
                          <input
                            type="radio"
                            name="payment"
                            value="dom"
                            required
                            checked={paymentMethod === "dom"}
                            onChange={() => setPaymentMethod("dom")}
                          />
                          <label htmlFor="dom" className="ml-2">
                            For students in India: 150 INR
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="payment"
                            value="int1"
                            required
                            checked={paymentMethod === "int1"}
                            onChange={() => setPaymentMethod("int1")}
                          />
                          <label htmlFor="int1" className="ml-2">
                            For students in UAE: 15 AED
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="payment"
                            value="int2"
                            required
                            checked={paymentMethod === "int2"}
                            onChange={() => setPaymentMethod("int2")}
                          />
                          <label htmlFor="int2" className="ml-2">
                            For students in any other country: 10 USD
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-xl-12">
                      {paymentMethod === "dom" && (
                        <div className="dom box">
                          <button
                            type="button"
                            className="w-100 btn btn-primary btn-lg domestic"
                            onClick={() => alert("Payment integration required")}
                          >
                            Pay INR 150
                          </button>
                        </div>
                      )}
                      {paymentMethod === "int1" && (
                        <div className="int1 box">
                          <button
                            type="button"
                            className="w-100 btn btn-secondary btn-lg international1"
                            onClick={() => alert("Payment integration required")}
                          >
                            Pay AED 15
                          </button>
                        </div>
                      )}
                      {paymentMethod === "int2" && (
                        <div className="int2 box">
                          <button
                            type="button"
                            className="w-100 btn btn-warning btn-lg international2"
                            onClick={() => alert("Payment integration required")}
                          >
                            Pay USD 10
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form End */}
    </>
  );
};

export default DrishyaPage;
