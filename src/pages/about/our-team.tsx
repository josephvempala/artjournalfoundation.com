import Link from "next/link";
// import React, { useState } from "react";



const teamMembers: TeamMember[] = [
  {
    id: "ruchira",
    name: "Ms. Ruchira Banka",
    title: "Co-founder, Director AJF",
    image: "/assets/images/founders/Ms. Ruchira Banka.webp",
    profile: `
      <p>Ruchira Banka is a passionate educator and administrator in the education field who comes with over 20 years of experience in teaching, leadership, consultancy and curriculum/ content development.</p>
      <p>Her journey of leadership in the education field includes leading the middle school in various curricula including the IB, Cambridge and CBSE. She currently works as a Middle Years Programme Principal at The School of Raya, Bangalore, India and is an IBEN Workshop Leader.</p>
      <p>She has led the authorization and evaluation processes for MYP at various IB World Schools and has led the MYP team to be able to structure, review, and implement the IB curriculum in an effective way.</p>
      <p>She carries a mission to contribute to the idea of an education system that calls for creating lifelong learners who are future ready. With this intent she trains/ coaches teachers across the globe into learning the essence of teaching and is a mentor and guide to many teachers and students.</p>
      <p>She has been awarded by the ‘Indian School Awards’ for her ‘Contribution to the Education Community’ in 2021</p>
      <p>A lifelong learner herself, Ruchira ensured that alongside her contributions as an educator, she must continue with her interest of writing and Art. She has exhibited her paintings in various Art galleries and started her own venture of an online Art gallery.</p>
      <p>She is a published author, “Visual Arts Companion for IB Middle Year Programme” is truly a companion for multiple teachers and students. She co-founded Art Journal Foundation with an intent of promoting Arts as a subject and bringing relevance to the concept of process over product.</p>
    `,
    section: "FOUNDERS",
  },
  {
    id: "nirav",
    name: "Mr. Nirav Patel",
    title: "Co-founder, Managing Director AJF",
    image: "/assets/images/founders/Mr. Nirav Patel-1.webp",
    profile: `
      <p>Nirav Patel, is an enthusiastic Art practitioner who comes with several years of experience in teaching IB Diploma Programme and IB Middle Years Programme, Visual Arts. He is an IBDP Visual Arts examiner, leading a team of IBEN examiners, former Head of Department (Arts) at a prestigious IB World School, a curriculum developer for IBDP Visual Arts for the IB and currently working as IBDP Visual Arts facilitator at Indus International School, Hyderabad, India. He is the co-author of Visual Arts Companion, a resource book for IB Middle Years Programme, which showcases his commitment to support learners.</p>
      <p>He believes that Art has the power to transcend boundaries and spark ideas to challenge perspectives and hence wishes to create a platform that supports students and teachers in research and development in Arts. Having completed his Masters in Visual Arts from Maharaja Sayajirao University of Baroda, India, Nirav has taken up the agenda of bringing up Arts as a subject, that focuses not only on developing artistic skills but builds up young artists who are ready to face the unfamiliar, as his personal mission and started the AJF to meet this.</p>
    `,
    section: "FOUNDERS",
  },
  {
    id: "subrata",
    name: "Mr. Subrata Ghosh",
    title: "Board of Advisors",
    image: "/assets/images/founders/Mr. Subrata Ghosh.webp",
    profile: `
      <p>Subrata Ghosh is a contemporary post modern artist who embarked on his higher education journey at Maharaja Sayajirao University of Baroda, India, where he quickly caught the eye of the art community with his artistic prowess, earning a first class distinction and other achievements. His work has been showcased in numerous exhibitions both nationally and internationally. He secured a prestigious UNESCO scholarship at a remarkably young age, which led him to travel to France, Africa, America, and many other places. He earned a scholarship at the Vermont Studio, where he honed his artistic skills. He was also invited to the Savannah College of Art and Design (SCAD) in the United States. His recent work, exhibited in Nice, Southern France, draws inspiration from locations like Cannes, Antibes, Nice, La Napoule, and Saint Rafael in the Côte d'Azur.</p>
      <p>Subrata works as the Head of the Department of Visual and Performing Arts in Calcutta International School, Kolkata, India. He is an IB Diploma Visual Arts examiner as well as a facilitator for many Art pedagogical workshops all over the world. He is an author as well as a contributor to many research essays on art in several journals.</p>
      <p>His contribution as a workshop leader and strategic planner at AJF is commendable.</p>
    `,
    section: "ADVISORS",
  },
  {
    id: "vaishak",
    name: "Mr. Vaishak M Raj",
    title: "Board of Advisors",
    image: "/assets/images/founders/Mr. Vaishak M Raj.webp",
    profile: `
      <p>Vaishak M Raj is an inspiring Performing Arts educator who believes in the magic of Art. Though he comes from a Science based education background, he is pursuing his career as a Performing Arts facilitator at DPS International Edge, Gurugram, India. He inspires and encourages students to develop their artistic voice and choice and hence has picked up the role of IBDP CAS coordinator at his current institution.</p>
      <p>His contribution to the field of Arts as an educator has been truly commendable.</p>
      <p>Vaishak is an IBEN curriculum developer, part of Enhanced MYP project and a part of developing the MYP Arts Teacher Support Material. He is an IBEN Program Leader for MYP, responsible for evaluation visits in the IBAP region. He is a workshop leader for all three IB Programmes - PYP, MYP and DP.</p>
      <p>Vaishak plays a key role in the development of AJF and contributes whole heartedly in the growth of the organization.</p>
    `,
    section: "ADVISORS",
  },
  {
    id: "saket",
    name: "Mr. Saket Raje",
    title: "Friend of AJF",
    image: "/assets/images/founders/Saket Raje.png",
    profile: `
      <p>Saket Raje is an IB MYP and DP Theatre facilitator with over 15 years of experience. As an IBDP workshop leader, examiner and moderator, he has been deeply involved in shaping the landscape of international education. His dedication extends beyond the classroom as he serves as a CIS school evaluator, ensuring quality standards in educational institutions.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "kuntal",
    name: "Ms. Kuntal Bhandare",
    title: "Friend of AJF",
    image: "/assets/images/founders/Ms. Kuntal Bhandare.webp",
    profile: `
      <p>Ms. Kuntal has 20 years of experience as a librarian with 6 years as an Extended Essay coordinator. She is one of the founder members of the Liferarian group and one of the core members of the International Collaboration of Extended Essay group (ICEE Association). She is an examiner for World Studies Extended Essay. She holds a Master’s degree in Library Science and is a passionate librarian working towards upskilling librarians through the Liferarian Association.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "felix",
    name: "Mr. Felix Owiredu Danso",
    title: "Friend of AJF",
    image: "/assets/images/founders/Mr. Felix Owiredu Danso.webp",
    profile: `
      <p>Embark on a transformative exploration with Felix, an experienced Art educator, IB Workshop Leader and Program Leader, as he delves into the power and significance of inquiry-based Visual Arts approaches in today's classrooms.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "aparna",
    name: "Ms. Aparna Mugwe",
    title: "Friend of AJF",
    image: "/assets/images/founders/Ms. Aparna Mugwe.webp",
    profile: `
      <p>Assistant DP coordinator at Oberoi International School, Mumbai, India. <br /> Lead for Visual Arts Department for over 8 years, 11 plus years of experience as a Visual Arts and TOK facilitator. <br /> IB examiner for Visual Arts and Extended Essay.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "bharath",
    name: "Mr. Bharath M S",
    title: "Friend of AJF",
    image: "/assets/images/founders/Mr. Bharath M S.webp",
    profile: `
      <p>Mr. Bharath has been working in the Performance Arts field for over 11+ years now, specifically in the field of Dance. His unwavering passion towards Dance has propelled him to create a profession in the IB programs as a Dance Facilitator for PYP/ MYP & IGCSE for 8+ years. He is currently working as an IB PYP & IGCSE Dance Facilitator at JBCN International School, Oshiwara, Mumbai.<br /> Along with being an IB educator, Bharath is also the Founder of "Every Soul Deserves to Smile" foundation that caters to mentoring the underprivileged communities in the rural parts of Karnataka through Arts and Service as Action projects. As the name suggests, Bharath's been spreading SMILES since 2019 through this same cause!</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "mythily",
    name: "Ms. Mythily Iyengar",
    title: "Friend of AJF",
    image: "/assets/images/founders/Mythily Iyengar.webp",
    profile: `
      <p>- Teacher Librarian.</p>
      <p>- Core Team Member (CEO), Liferarian Association.</p>
      <p>- Expertise in integrating technology and Al tools into teaching and learning.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "samual",
    name: "Mr. Samuel Ohene-Sarfo",
    title: "Friend of AJF",
    image: "/assets/images/founders/Samuel_Ohene-Sarfo.webp",
    profile: `
      <p>Samuel Ohene-Sarfo is a dynamic Art Educator, Researcher and Artist with a passion for interdisciplinary learning. with 12 years of experience, currently teaching Art & Design Studio at Ghana Senior High School. He integrates art with innovative teaching strategies to enhance cognitive learning in mathematics and science.</p>
      <p>He is the visionary behind Art in the Round, a concept that reflects his multifaceted engagement in painting, textile design, graphic design, sculpture, and music composition and performance—emphasizing the interconnectedness of artistic expression. His textile designs, such as “The Heart Language” (Sam Jonah Library, University of Cape Coast), “The Safe House” (Eastern Premier Hotel), and his work for Volta Technical Institute, celebrate African symbolism and philosophy.</p>
      <p>Explore more of his work at <a href="https://artsintheround.com" target="_blank">artsintheround.com</a>.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "benny",
    name: "Mr. Benny Kharismana",
    title: "Friend of AJF",
    image: "/assets/images/founders/Benny Kharishman.png",
    profile: `
      <p>- An experienced and passionate IB DP and MYP Visual Arts and Design facilitator</p>
      <p>- A practicing Visual Artist</p>
      <p>- IBEN MYP and DP Workshop leader</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "madhavi",
    name: "Ms. Madhavi Chetan Sharma",
    title: "Friend of AJF",
    image: "/assets/images/founders/Ms. Madhavi Chetan Sharma.webp",
    profile: `
      <p>Meet Ms. Madhavi Sharma, an IBEN workshop leader, writer, and passionate educator with 13+ years of teaching experience, including over a decade with the IB PYP. She is currently the Grade 5 Team Lead and Homeroom Teacher at Candor International School, Bengaluru.</p>
      <p>An art enthusiast, she believes in the power of artistic expression to enhance student engagement and holistic development. Through her writing and love of art, she shares insights on education, innovation, and the transformative impact of education in learning.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "gautam",
    name: "Mr. Gautam Menon",
    title: "Friend of AJF",
    image: "/assets/images/founders/Mr. Gautam Menon.png",
    profile: `
      <p>Meet Mr. Gautam Menon, An artist and musician at heart, Gautam has vast experience in the performing arts industry, which enables him to bring real-life scenarios into his classroom. His creative approach to educational pedagogy has inspired many of his students to pursue a meaningful career in the arts. With 10 years of teaching experience as an IB educator, examiner, program leader, and teacher trainer, he is on a mission to transform arts education in India.</p>
    `,
    section: "FRIENDS",
  },
  {
    id: "zeba",
    name: "Ms. Zeba Khan",
    title: "Friend of AJF",
    image: "/assets/images/founders/Zeba Khan.webp",
    profile: `
      <p>Zeba Khan is an IBDP and IGCSE Visual Arts teacher. She has also had the experience of teaching A levels. Zeba is passionate about Art and Education. Her journey, spanning diverse international and Indian educational landscapes, reflects a profound belief in the transformative power of art and its ability to serve as a deeply personal form of communication.<br /><br />
      Zeba serves as an IBDP examiner, a testament to her deep understanding of the rigorous standards and nuanced requirements of the International Baccalaureate program. Furthermore, her role as a CIE coursework moderator and examiner for Cambridge International Examinations highlights her ability to accurately assess and evaluate. Her dedication to her craft and her students has not gone unnoticed. She was honored with the prestigious "Amazing Teacher Award in UAE," a heartfelt recognition of her contributions to education and her profound impact on the lives of her students.</p>
    `,
    section: "FRIENDS",
  },
];

import TeamModals, { TeamMember } from "@/components/about/TeamModals";
import withLayout from "@/components/layout";


const OurTeamPage = () => {
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
              <li>Meet Our Team</li>
            </ul>
            <h1>Meet Our Team</h1>
          </div>
        </div>
      </section>

      <section
        className="about-ajf"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center" style={{ color: "black" }}>
                <p>
                  Art Journal Foundation, a creative wing of Elevating Art
                  Private Limited was founded with a sole aim to be a support
                  system for students, teachers, artists - both budding and
                  renowned.
                </p>
                <p>
                  The founders truly believe that Arts is not just an
                  expression, it is a way of life. Artists are expressionists,
                  however when it comes to support for them there is a lack of
                  resources and means. Hence, the thought of creating this
                  community of teachers, by teachers and for teachers that takes
                  Arts to the deserved heights.
                </p>
                <p>
                  A subject that truly creates lifelong learners; the skills of
                  life are learnt when one learns Arts, however is learning the
                  end goal? The end goal is to be a creator who brings together
                  ideas, emotions, skills and imagination to produce a piece
                  with an intention that evokes meaning and AJF wishes to
                  develop the traits of Creator Traits in an individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamModals teamMembers={teamMembers} />
    </div>
  );
};

export default withLayout(OurTeamPage);
