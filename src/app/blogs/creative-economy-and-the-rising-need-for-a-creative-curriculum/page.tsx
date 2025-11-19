import React from 'react';
import Image from 'next/image';
import BlogLayout from '../BlogLayout';

const BlogPage = () => {
  const title = "Creative Economy and the rising need for a creative curriculum";
  const breadcrumbTitle = "AJF Blogs";

  return (
    <BlogLayout title={title} breadcrumbTitle={breadcrumbTitle}>
      <div className="section-title text-center">
        <h2 className="section-title__title">{title}</h2>
      </div>

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <p className="section-paragraph" style={{ color: '#333' }}>
          In the last few years there has been conversations and discussions brewing
          around the rise of creative economy. ‘What is creative economy?’- let’s just say
          it’s an evolving concept. But by the name one can fairly say it is based on people’s
          use of their creative imagination to increase an ideas value. It was John
          Howkins, a British author and speaker that popularized the term ‘creative
          economy’ in 2001. Initially he applied the term to the arts, cultural goods and
          services, toys and games & even research and development.
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/Image16.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Well, I must say it did not start there. If we go back in time, the term
          ‘creative industries’ prevailed and were evolving even 20 years ago. Some
          countries even used to describe them as ‘cultural industries.’ However, no
          government or institutions ever took a step to measure or document the growth
          of the industry for years together. In 1998, the department of culture, media
          and sport in UK published ‘Creative Industries-mapping document 1998’. The
          follow up analysis in 2001 revealed and defined that the creative industries were
          generating jobs at twice the rate of the UK economy as a whole. In 2008 the
          survey published by the United Nations again testified that the rapid rate of
          the creative and cultural industries was being visible in every continent.
        </p><br />


        <p className="section-paragraph" style={{ color: '#333' }}>
          But just look around us. We are living in a world where the economy is driven by
          the quality of creative content. This is now not only pertaining to dance, drama,
          music, and visual arts. Financial consultants, doctors, teachers and even coders
          have opted to become influencers, content creators and social media icons. In no
          time we can see the creative economy rising above the major revenue earning
          streams in every country. Different countries have now understood that creative
          and cultural activities can put them in a pedestal in the global forums. The rise
          of K-pop cultures, foreign language movies and even cuisines are living examples in
          front of us. As you can see the need for interdisciplinary learning and the
          requirement for an evolved creative curriculum is the need of the hour.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Many traditional education patterns had side lined the creative subjects as co-
          curricular activities in the past. However, pedagogies such as the International
          Baccalaureate has always made arts an integral part of its curriculum right
          from its Primary Year Programme (PYP) all the way till its Diploma Programme
          (DP). The Middle Years Programme (MYP) particularly focuses on interdisciplinary
          learning and teaching where students can form new understandings by drawing
          connections between subjects. This opens doors to a holistic approach to develop
          their creative thinking and synthesis thinking skills. With the revised MYP arts
          guide that came out in 2022, the pedagogy now offers strength and flexibility
          to the art education based on conceptual and contextual learning.
        </p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          The curriculums which are developing in terms of its arts education can still
          adapt the service learning and project-based learning strategies to inculcate
          creative thinking in students. Inquiry-based teaching strategies can push
          educators to bring in more creative content and presentations to the classrooms.
          Designing and devising creative assessments is the next step towards this.
          Communication patterns have always been a challenge to many students in
          different pedagogies. With a creative window they can now express and
          reciprocate in their individualistic ways. Slowly but steadily, we are approaching a
          curriculum that focusses on a student’s individuality and creativity rather than
          his adaptability to age old
        </p>
        <br />
      </div>
      <div className="blogger-details" style={{ paddingLeft: '10px' }}>
        <p className="blogger-name" style={{ color: '#333' }}>Regards,</p>
        <h4 className="blogger-name" style={{ color: '#ff9900' }}>Vaishak M Raj</h4>
      </div>
      <div className="blogger-info-box" style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '10px', border: '2px solid #ff9900', borderRadius: '10px' }}>
        <div className="blogger-image" style={{ maxWidth: '200px', flexShrink: 0, marginRight: '20px' }}>
          <Image
            src="/assets/images/blog/blog_images/Vaishak.webp"
            alt="Blogger Image"
            width={200}
            height={200}
            style={{ maxWidth: '100%', height: 'auto', display: 'block', maxHeight: '200px' }}
          />
        </div>
        <div className="blogger-details">
          <p className="blogger-name" style={{ color: '#333' }}>
            Vaishak M Raj is an IB continuum educator and has been working in the
            performing arts department at DPS International Gurgaon engaging both the
            MYP and PYP students to develop their artistic voice and choice. He is also a CAS
            adviser for DP. He has been the creative head for the British Council’s project
            ‘Imperfect Circle’ and has also won numerous scholarships and grants towards
            his meritorious services in dance.
          </p>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
