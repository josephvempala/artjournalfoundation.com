import React from 'react';
import Image from 'next/image';
import BlogLayout from '../BlogLayout';

const BlogPage = () => {
  const title = "The process and the product";
  const breadcrumbTitle = "AJF Blogs";

  return (
    <BlogLayout title={title} breadcrumbTitle={breadcrumbTitle}>
      <div className="section-title text-center">
        <h2 className="section-title__title">{title}</h2>
      </div>

      <div className="accordion active text-center">
        <div className="accordion-content">
          <div className="inner">
            <p>
              We all love and admire Art, isn't it? The beauty of some Art pieces mesmerizes
              us. Though some of us just look just at the artwork, there are others who may
              wonder, how did this piece come into existence?
              A barrage of thoughts that juggles in our heads.....
            </p>
            <br />
            <p>
              - What is the journey behind this?<br />
              - What is the magic that happened in the studio of the artist?<br />
              - How did his/ her thoughts evolve over a period?<br />
              - What has been the inspiration?<br />
              - How was the concept transformed into a beautiful visual piece?
            </p>
          </div>
        </div>
      </div>

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Know the life journey of a masterpiece with Preksha Tater!!</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Preksha Tater is an artist based in Surat, Gujarat .After her postgraduation in
          2007, she participated in many National and International exhibitions and
          residencies. She is the recipient of ‘Nasreen Mohamedi’ Award for the best
          display in the year 2007.In the year 2009, she was awarded ‘Inlakes India
          Foundation’ award. In the same year she was amongst ten selected artist for
          the ‘Vedhera Annual Group Show’ as part of FICA emerging artist. She also did
          her solo show 'Small wonders' in the same year.
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Her artistic investigation is a flux of multiplicity in mediums of expressions like
          drawings, sculptures and installations. Over years, her practice has evolved as a
          responsive relation to her ‘Space/Place’, it is both emotive and metaphysical.
          From large scale installation projects, to extremely personal studio-based
          practice, she navigates through space and time to evoke artistic memoirs. In
          materiality and its sensation, she liberates herself through the act making.
        </p><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Here we have Preksha, who answers some of our
          questions to give us insight into the journey we are
          looking forward to know:</h2><br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>1) How do you finalize the colour combination and
          the elements of your artwork?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          As an artist, I believe in my intuitive nature of practice, which is my sub-
          conscious reaction to my experience. Elements and the colours are decided in correlation to each other and to bring harmony in the works along with satire, humour and statement of my purpose.
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/Image2.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>2) What are the final preparations you do before
          your artworks get displayed?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          I try to be calm and let my instinct work according to the space and place where
          the artwork is going to be displayed. Here, instinct is only my tool of execution
          but I am always very much aware of the technicalities, laws of physics,
          psychological impact of my pieces as well as the viewers who will be looking at my
          work.
        </p><br />
        <Image
          src="/assets/images/blog/blog_images/Image3.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>3) How do you finalise the form
          (painting/sculpture/printmaking) of the piece that you at first thought of making?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          -For me medium of expression is no bar.<br />
          I go one at a time and in the end, all can be combined to make one work.
        </p>
        <br />
        <Image
          src="/assets/images/blog/blog_images/Image4.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>4) To what extent presentation affects the
          artwork display?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          - Whether it's a solo or a group show space design is very important part of my
          practice. How you bring the entire fragments of your work together is the most
          significant part of an artwork display. Elements like light, climatic condition, site
          of execution etc. they all bring different moods and experience into the minds of
          the viewer while looking at an artwork.<br /><br />
          A process-based work is never finished until it's been displayed in a manner one
          has visualized. It remains as a fragment.
        </p>
        <br />
        <Image
          src="/assets/images/blog/blog_images/Image5.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>5) Has the viewer ever interpreted your artwork in
          a way you did not intend to portray?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Whether the work is titled or untitled I like to leave my work open-ended. I
          believe once the work is done it’s up to the viewer to Interpret or re-interpret
          according to their perception. It’s interesting to understand how viewer's
          interpret artwork according to their knowledge, experience, age, caste, politics
          etc.
        </p><br />
        <Image
          src="/assets/images/blog/blog_images/Image6.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>6) Does your artwork reflect the influence of the
          artist/s who inspire you? If yes, then how ? Or why no?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          I will not say that it reflects the influence of the artist but in most cases, I
          try to para phrase them whenever it is required. Paraphrasing helps me not to
          repeatedly say the same thing what has been told before and it also allows me
          to justify the context through which I look at my work.
        </p><br />
        <Image
          src="/assets/images/blog/blog_images/Image7.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
      </div>
      <div className="blogger-details" style={{ paddingLeft: '10px' }}>
        <p className="blogger-name" style={{ color: '#333' }}>Regards,</p>
        <h4 className="blogger-name" style={{ color: '#ff9900' }}>Art Journal Foundation</h4>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
