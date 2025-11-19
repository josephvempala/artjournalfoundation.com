import React from 'react';
import Image from 'next/image';
import BlogLayout from '../BlogLayout';

const BlogPage = () => {
  const title = "Art: A Space for Expression, Not Competition";
  const breadcrumbTitle = "AJF Blogs";

  return (
    <BlogLayout title={title} breadcrumbTitle={breadcrumbTitle}>
      <div className="section-title text-center">
        <h2 className="section-title__title">{title}</h2>
        <p>Samuel Ohene-Sarfo | 4 min read</p>
      </div>

      <Image
        src="/assets/images/blog/blog_images/A Space for Expression - Header_Image.png"
        alt="Image Description"
        width={350}
        height={250}
        className="section-image"
        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
      /><br />

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <p className="section-paragraph" style={{ color: '#333' }}>
          When we talk about art, it’s often seen as a competition, especially when it comes to things like
          realism—drawing or painting people, nature, and objects just as they look in real life. Over time,
          this idea has grown, and people often believe that if you're good at realism, you’re a better artist.
          But that's not the whole story.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          As an art teacher and artist myself, I’ve noticed this belief many times. Some students, especially
          those who are skilled in realism, might think that others aren't as good because they don’t focus
          on the same style. On the other hand, those who aren't as confident in realism sometimes think
          they’re not good enough. This mindset can really hurt them. I remember back when I was in senior high school, many of my classmates asked me to do their drawing assignments for them because
          they thought I was better at figure drawing and realism. At first, I felt flattered, but I soon realized
          that this wasn’t helping them. They missed the chance to practice, improve, and develop their own
          unique styles. Their creativity stayed stuck because they were comparing themselves to me, and
          that held them back. This is a big problem because instead of growing together, we end up holding
          each other back
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Art is not about competing with others. It’s about expressing your ideas, exploring different ways
          to create, and using your unique voice. Whether you’re working in graphic design, textiles,
          sculpture, or performance art, each style has its own place. Art isn’t about one style being better
          than another—it’s about having space for everyone to add their own voice to the conversation.
          When we respect and value different types of art, we enrich the whole field.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Now, while the expression of art itself isn’t a competition, there are times when creativity and
          innovation push us to compete—especially when an artist is solving complex problems. Think
          about Leonardo da Vinci and his design of the helicopter. This idea was born from his imagination,
          but over time, people kept improving it. Each generation builds on what came before, making the
          invention more advanced. So, in that way, creativity can drive progress and spark competition. But
          even in these cases, the goal isn’t about one artist being better than another—it’s about solving a
          problem in a new and creative way. That’s where innovation shines, not in how one artist compares
          to another.
        </p>
        <br />
        <Image
          src="/assets/images/blog/blog_images/A Space for Expression - Image 1.png"
          alt="Image Description"
          width={350}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <br />
        <Image
          src="/assets/images/blog/blog_images/A Space for Expression - Image 2.png"
          alt="Image Description"
          width={350}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          All forms of art are important. Realism, abstract art, digital design, traditional crafts—they each
          have their own role to play in telling stories, sharing ideas, and changing how we see the world.
          Art helps us reflect, express emotions, and even challenge old ways of thinking.
        </p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          The key is to stop comparing and start supporting each other. No matter what type of art you create,
          it’s valuable. Whether you’re great at realism or working with something completely different,
          your style matters. Art is about communicating, feeling, and inspiring change. Let’s focus on
          helping each other grow, whether that’s through feedback, working together, or simply celebrating
          what we each bring to the table. When we do that, we can build a creative community that
          appreciates everyone’s contributions.
        </p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          In the end, art is not a competition. It’s a space where everyone can express themselves, share their
          ideas, and grow together. Let’s embrace the diversity of art, because it’s in those differences that
          we find the true beauty of creativity.
        </p>
        <br />
      </div>
      <div className="blogger-details" style={{ paddingLeft: '10px' }}>
        <p className="blogger-name" style={{ color: '#333' }}>Regards,</p>
        <h4 className="blogger-name" style={{ color: '#ff9900' }}>Samuel Ohene-Sarfo</h4>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;