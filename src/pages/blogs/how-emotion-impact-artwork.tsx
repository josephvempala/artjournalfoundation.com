import React from 'react';
import Image from 'next/image';
import BlogLayout from "./BlogLayout";
import withLayout from "@/components/layout";


const BlogPage = () => {
  const title = "How emotions impact artwork?";
  const breadcrumbTitle = "AJF Blogs";

  return (
    <BlogLayout title={title} breadcrumbTitle={breadcrumbTitle}>
      <div className="section-title text-center">
        <h2 className="section-title__title">{title}</h2>
      </div>

      <div className="accordion active text-center">
        <div className="accordion-content">
          <div className="inner">
            {/* Content was empty in the original Blade file lines 35-37 */}
          </div>
        </div>
      </div>

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Edvard Munch’s – “The Scream”</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Also known as 'The Cry', Edvard Munch's painting 'The Scream' (1893) is a well-known artwork sold for $119.9 million. It is a prime example of expressionist work.
          The expressionist painters worked to
          convey emotions rather than objective
          scenes. It became one of the famous
          paintings that got represented in
          popular culture. It was imitated and
          parodied. Famous pop artist Andy Warhol made a series of prints copying ‘The
          Scream’. The Scream series of horror movies have a ghost face mask worn by
          the antagonist. This celebrated painting by Munch had four versions- two in
          pastels and two in the paint.
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Thoughts are the dry expressions of the mind; emotions make them juicy. We
          make these little humans understand that you must be able to direct it the way
          you wish. Unleash your power to be present in the moment. Once they deeply
          touch their lives by being conscious humans and not just being ordinary, they will
          turn other lives extraordinary. Observation is built upon with various consistent
          practices, building on a learning environment full of calm colors to be closer to
          nature, which allows for connecting with peers and a free flow of expression.
          Establishing a culture of mindfulness and observation will certainly have an
          absolute impact.
        </p><br />
        <Image
          src="/assets/images/blog/blog_images/Image8.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>The period:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          This painting was done in 1893 that is at the end of the 19th century during
          a transitional period known as the Fin de Siecle. Before this time, artists
          painted their subjects objectively. The amount of money they made was
          measured by their technique. This was when a camera and photography
          weren’t popular. But by the end of the 19th century, painters like Munch
          experimented by representing their inner world – the emotions and feelings
          that filled their heart and poured them onto the canvas. There was a
          prevalence of bright, exaggerated colours and shapes that were simple.
          Although gaining negative remarks and reaction from the critics, artists like
          Munch and Van Gogh set the scene for expressionists.
        </p><br />


        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Life of Edward Munch:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          As a child, he suffered due to health issues and even missed his school as a
          consequence of his illness. His father was a doctor who was overly religious. His
          mother died of tuberculosis when Edvard was only five years old. Losing his
          mother at such an early age was quite traumatic for the young Edvard. When
          he was 14 years old his favorite sister Johanne Sophie died in 1877. This
          deeply saddened him. To add to this, his father was verbally abusive. He even
          told his children that their mother was looking down from heaven and grieving
          because they were not behaving well. Imagine what impact this kind of
          behaviour had on Edvard's psyche. His father narrated various ghost stories
          which also added to the macabre atmosphere. The poor Munch was always
          under the fear that death was coming for him. Munch's younger sister Laura
          was diagnosed with mental illness. Of the five siblings, only Andreas married
          but he too died soon. Art Journal Foundation Munch wrote 'I inherited two of
          mankind’s most frightful enemies – the heritage of consumption and insanity.'
        </p><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Impact of emotions on the Artwork:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          This particular piece 'The scream ' was autobiographical in nature. 22
          January 1892 diary entry of Munch
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          ‘One evening I was walking along a path, the city was on one side and the fjord
          below. I felt tired and ill. I stopped and looked out over the fjord—the sun
          was setting, and the clouds turning blood red. I sensed a scream passing
          through nature; it seemed to me that I heard the scream. I painted this
          picture, painted the clouds as actual blood. The colour shrieked. This became
          The Scream.’
        </p>
        <br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Inspiration for the image:-</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          I was walking along the road with two friends – the sun was setting –
          suddenly the sky turned blood red – I paused, feeling exhausted, and leaned on
          the fence – there were blood and tongues of fire above the blue-black fjord and
          the city – my friends walked on, and I stood there trembling with anxiety –
          and I sensed an infinite scream passing through nature. Munch was taking a
          walk at dusk with some friends by the water. This otherwise simple walk
          turned out to be a moment of great anxiety for Munch. According to Munch
          himself, the Scream was painted to represent his soul. It was a moment of
          existential crisis. (Existential crises are moments when individuals question
          whether their lives have meaning. One becomes disillusioned. Psychological
          trauma, separation, major loss, death of loved one, psychoactive drug use can
          lead to it) As we know, Munch had been sad for most of his life due to the
          untimely death of his mother and then of his loved sister. It was as if
          whoever he loved was taken away from him. One couldn’t expect much from a
          verbally abusive father. Munch did not marry and his love life was tumultuous
          in general, giving him more pain than happiness. This all contributed to his
          existential crisis. Also, long term illness can be very exhausting and takes away
          all the enthusiasm and joy of life and leaves one drained. So all these factors
          contributed to the gloominess in his life. He was suffering from mental health
          issues because of all these traumatic experiences.
        </p>
        <br />
        <Image
          src="/assets/images/blog/blog_images/Image9.webp"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Some believe he had a 'depersonalization
          disorder'.‘Depersonalization disorder
          occurs when you persistently or
          repeatedly have the feeling that you're
          observing yourself from outside your body
          or you have a sense that things around
          you aren't real or both.' (Mayoclinic) It is
          thought to originate from childhood
          abuse. Munch himself mentions having
          anxiety. Studies have found that the
          severity of abuse and neglect is
          associated with increased depression and
          anxiety symptoms in adulthood. The more
          severe the abuse the more likely the victim shows anxiety and depression.
        </p>
        <br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>About Edvard Munch’s panic attack:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Before his momentary breakdown, one of his sisters was committed to a
          mental asylum because of severe mental health issues. Near the city of Oslo is
          a road in a commune called Ekeberg, that overlooks Oslo Fjord. At the time
          when Munch might have walked on it, the road was a path and interestingly a
          slaughterhouse and a mental asylum was located in the proximity. The sound of
          animals that were mercilessly killed could have been the 'scream of nature,'
          Munch mentions. Also, Munch was visiting his younger sister who had been
          recently admitted into the asylum. So we see, all these tragedies in his personal
          life were enough to make him have a panic attack when he was walking that
          road. He felt like screaming in that moment of overwhelming agony and
          disturbance. It was as if he was getting bogged down by all the weight of
          this world. It was as if his powerful troubled emotions were choking him. Most
          artists express their emotions, be it exhilaration or agony, through their work.
          Poets write poems and painters paint when any emotion overwhelms them.
        </p><br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Techniques used in “The Scream”:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          The cry of nature involves everything suffering from the same anxiety as it is
          suffering. The man and the landscape are one in experiencing this agony. The
          Fjord and human figure both follow wavy forms. The materials and paints used
          by Munch are uncertain. There is no use of varnish. Haphazard use of oils,
          pastels, crayons and pencils is there. The ghostly figure was painted with full
          yellow, beige and purple. Dark and light accents at the top emphasise the
          screaming of the figure. Based on the analysis, Munch used pigments including
          cadmium yellow, vermilion, ultramarine blue and viridian. The sunset is painted
          in exaggerated orange and red while other things are painted in green, purples,
          greys and pale blue. The ghostly figure is painted in melancholic colours –
          purple, blue and pale yellow. There is thus a clear contrast in colours. There are
          swirling lines and distorted forms. Although the bridge and the other two
          people are painted in rigid lines, these two people are simple and abstract. This
          is in contrast to the main ghostly figure with long hands, a curved body and
          mummy-like face.
        </p><br />
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
