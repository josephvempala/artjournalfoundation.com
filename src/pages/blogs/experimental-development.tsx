import React from 'react';
import Image from 'next/image';
import BlogLayout from "./BlogLayout";
import withLayout from "@/components/layout";


const BlogPage = () => {
  const title = "Experiment/Development";
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
              Michael Carini received his artistic training
              in Los Angeles, studying at Loyola
              Marymount University while simultaneously
              serving as an apprentice under respected
              artists Jane Brucker and Roland Reiss.
              Graduating at the top of his class with
              honors including the Scholar of Distinction
              Award in Painting, Carini returned to his
              hometown in San Diego, where he currently
              maintains his studio. With over 100
              exhibitions nationally and internationally, he
              has received over a dozen major awards and
              was named Emerging Artist of the Year by
              Art Design Consultants. Carini's work can be found all over the globe in the
              collections of celebrities, major businesses, and private collectors
            </p>

            <Image
              src="/assets/images/blog/blog_images/Image10.webp"
              alt="Image Description"
              width={300}
              height={250}
              className="section-image"
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            /><br />
          </div>
        </div>
      </div>

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Inspiration</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Some artist colour the canvas as an expression of their inner world, dreams and
          thoughts like Salvador Dali's 'The Persistence of Memory' where the melting
          watches in the landscape represents the passage of time when you feel it in
          your sleep. Others do portraits like the famous Leonardo da Vinci Vinci's Mona
          Lisa or self-portraits like those of Frida Kahlo, the renowned Mexican painter
          who depicted the excruciating physical pain she was suffering in her self-
          portraits. She painted 55 self-portraits. In her own words "I paint myself
          because I am too often alone and because I am the subject I know best". But
          most visual artists paint something that may be an experience or observation
          specific to them, interestingly making it a universal experience for all the
          onlookers. The artist's soul succeeds in bringing to life something bigger than
          himself.
        </p><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>1) What is the source
          of your inspiration?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Struggle. I call my process Acrylic Alchemy
          and it is based on the principle idea of
          using your struggle as a sacrifice of
          equivalent exchange to create something
          positive and beautiful for the world. If
          you utilize your struggle, pain, and trauma
          as a source of fuel, take control of it, it no
          longer has any power over you. This is the
          inspiration behind all of my work...creating
          your own spark in the darkness.
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/Image11.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>2) Your process of creating art is similar to which other famous artists?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          It’s difficult to say because I’m not
          trying to be like any other artist, past or
          present. I am focused on my own unique
          voice and journey, rather than trying to
          emulate or mimic another. I spent a lot
          of time studying Art History during my
          undergraduate days. I took as many classes as possible, took in as much as I
          could, and then filtered that as I discovered my own voice. Now I try to
          distance myself from other work as much as possible while creating because, if
          only on a subconscious level, it may influence my work and my voice. I think that
          there are so many sources to pull from (not even limited to art) and it varies
          depending on the story being told and where I am in my life at any given point.
          Today I was referencing similarities to my late mentor Roland Reiss. Some of
          the artists I greatly respect are Van Gogh, Kandinsky, and Basquiat.
        </p><br />
        <Image
          src="/assets/images/blog/blog_images/Image12.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>3) Your artwork has
          its elements borrowed from which era or style?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Similar to my view of artists, the same
          goes for the elements of my work and
          process. It’s more of a collection of
          elements from the totality of my studies
          and experience that are filtered down to
          whatever story I might be telling at the
          time. There really are no limitations and
          it’s a loose blend as I work to develop a
          unique voice and signature elements of my
          own, which I believe I have done throughout the course of my career.
        </p>
        <br />
        <Image
          src="/assets/images/blog/blog_images/Image13.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>4) What themes do you choose for self-discovery through art?</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          All of my work is about finding your voice and self-discovery...so that really is the primary theme in and of itself. I can think of nothing more beautiful to dive into than the discovery of self, hoping
          to help others find themselves in the process. As I am always changing,
          whether moving forward or backwards, because I do admittedly do both, I am
          presented with an endless abundance of source material to dive into. The story
          continues as long as I do...and perhaps even after.
        </p>
        <br />
        <Image
          src="/assets/images/blog/blog_images/Image14.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>5) Describe your process of creating the artwork after you have an idea or concept in mind??</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Sometimes the concept precedes the
          painting, but not always. Sometimes it is a
          fluid blend. Often though, it is very much
          dance or a relationship. Say the ideas come
          first...that is the beginning of the dance
          or relationship. I have an idea of how it is
          to go or how to lead, but that’s not
          always the case. Sometimes I lead...
          sometimes the painting leads. If I try to
          control it, that will show. I have to allow
          the painting to have a voice, to have a
          say, to take its own steps. I find this to
          be the key to success and the best of my
          work. It’s not always as expected, but it is as it should be, whatever that
          may be. There may be other dances or relationships and it’s important not to
          compare them, but to accept and appreciate each for what they are, rather
          than what they could be. They each have their beauty, particularly when you
          nurture them, work together, and allow them to blossom as you do as well.
          This is the healthy relationship, the beautiful and delicate dance.
        </p><br />
        <Image
          src="/assets/images/blog/blog_images/Image14.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
      </div>
      <div className="blogger-details" style={{ paddingLeft: '10px' }}>
        <p className="blogger-name" style={{ color: '#333' }}>Regards,</p>
        <h4 className="blogger-name" style={{ color: '#ff9900' }}>NEHA RAUTELA</h4>
        <h4 className="blogger-name" style={{ color: '#ff9900' }}>(Art critic, Internationally published poet)</h4>
      </div>
    </BlogLayout>
  );
};

export default withLayout(BlogPage);
