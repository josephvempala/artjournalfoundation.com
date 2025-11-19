import React from 'react';
import Image from 'next/image';
import BlogLayout from '../BlogLayout';

const BlogPage = () => {
  const title = "“Perspective and Perception” : The Art of Optical Illusions";
  const breadcrumbTitle = "Spark Creativity";

  return (
    <BlogLayout title={title} breadcrumbTitle={breadcrumbTitle}>
      <div className="section-title text-center">
        <h2 className="section-title__title">{title}</h2>
      </div>

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <div className="accordion-content">
          <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Abstract:-</h2><br />
          <div className="inner">
            <p>
              This essay examines how artists have used optical illusions to captivate viewers and explore the
              intriguing relationship between perspective and perception in art history. It follows linear perspective,
              trompe l'oeil, and anamorphosis from ancient Greek and Roman painting to Renaissance masters to
              contemporary. The essay examines Leonardo da Vinci, Hans Holbein, M.C. Escher, Victor Vasarely
              and Patrick Hughes, whose inventive methods have expanded visual awareness—also focusing on the
              innovative works of Patrick Hughes and his technique known as "reverspective." methods and
              techniques. The analyses of Hughes' works show how he produces disorientation and surprise,
              pushing viewers to think more about a sense of disorientation and surprise in his art-making practice.
              Through coherence, the essay shows how artists use perspective and vision to create new realities and
              trigger emotions, demonstrating the human mind's ability to create and analyse existence through
              visual art.
            </p>
            <br />
            <br />
            <p><strong>Key words:</strong> Perspective, Perception, Optical Illusions, Anamorphosis, Trompe l'oeil, Reverspective</p>
          </div>
        </div>
      </div>

      <div className="section-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Introduction:-</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Perception and perspective are essential and fundamental to the creative process as we learn more about
          the art world. Our cognitive abilities and the incredible tool of the human eye play a crucial role,
          continually collecting data and moulding our perception of the world. Our understanding of depth,
          size, and shape is not a direct representation of reality but rather an intricate human cognitive process
          in the visual system that depends on multiple signals to understand the three-dimensional world based
          on two-dimensional retinal pictures.
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          The factors contributing to the perception of depth in a scene include linear perspective, the
          phenomenon where parallel lines seem to converge in the distance. In relative size, objects closer to the
          viewer appear more significant than those farther away, and overlapping figures, objects that partially
          block others, are perceived as being closer. Light and shadow help define the shape and depth of
          “Perspective and Perception” : The Art of Optical Illusions 2 objects. Nevertheless, these indications are unreliable, and artists can create captivating visual illusions
          by intentionally altering these cues, which deceive our brains. Although the visual system is highly
          efficient in normal circumstances, it can be deceived by meticulously designed visuals that question our
          preconceptions about the essence of reality. Others can impact our views, a complex combination of
          physical and mental processes and past experiences. Artists, who are always eager and ready to learn,
          have created thrilling visual illusions that make us reevaluate how we perceive the world
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Throughout history, artists have employed linear perspective, colour, and geometric patterns to alter
          viewers' visual perception and question their comprehension of reality. An essential invention that
          facilitated the shift from Byzantine art to Baroque and Renaissance to modern style was the
          implementation of perspective, which greatly influenced how artists manipulated the viewer's
          perception and understanding of the artist's experience in the sociocultural context. Similarly, in the
          Op Art movement, artists explore visual perception through geometric patterns, contrasting colours,
          and different techniques to create the optical illusion of movement, depth, and three-dimensionality
          on a flat surface. Such an optical illusion combines these elements to create the effect. When we look
          at this painting technique, it prompts us to think about how we perceive the environment and how we
          perceive it visually.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          This essay will explore the intriguing convergence of perspective and perception in art practice
          throughout significant art evolution, emphasising how artist Patrick Hughes uses optical illusions to
          captivate viewers. It will also examine Patrick Hughes's inventive approach, "reverspective," which
          skillfully manipulates emotions by creating unexpected spatial relationships.
        </p><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>The History of Optical Illusions:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Studying optical illusions in art has a significant and extensive historical foundation. The lasting
          impact of ancient Greek and Roman artists is particularly remarkable, as they employed techniques
          such as trompe l'oeil and perspective to achieve an illusionary sense of space in their paintings. These
          techniques, employing forced perspective to deceive the viewer's perception by making painted things
          appear genuine and creating the illusion of three-dimensional effects on a flat surface, still inspire
          contemporary artists. The use of chariosurio techniques, shading, and perspectives in Trompe l'Oeil
          paintings to give a sense of dimension and realism is a testament to their lasting impact. These classical
          techniques are traced back to the European Baroque and Rococo periods and were widely used to
          implement ornamental murals and decorations. (Meyer, 2023) In the modern trends, trompe l'oeil art
          is prevalent and can be found in many forms, including murals, graffiti, street art and architectural
          ornamentation.
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Adopting a more naturalistic approach and introducing realistic depth, size, volume, and perspective
          brought about a significant change during the Renaissance period in the 14th century. These artistic
          principles, integrated with mathematics and science, carry the weight of the Renaissance's influence on
          art history
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Filippo Brunelleschi identified the linear perspective as a significant breakthrough in conveying the
          appearance of three-dimensional space on a flat surface. These principles were later formalised by the
          Italian scholar and artist Leon Battista Alberti in his 1435 dissertation, "De Pictura," or "On Painting,"
          thereby cementing his role in the development of art during the Renaissance. (Byzantium and Italian
          Renaissance Art, n.d.)
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/1.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Renaissance masters of the linear perspective technique were Raphael, Leonardo da Vinci, Giotto,
          Masaccio, and Perugino. This gave artists the ability to produce paintings with a true feeling of scale
          and depth. In the incomplete "Adoration of the Magi" by Leonardo da Vinci, for instance, the artist
          employed a checkerboard pattern to establish the figures' scale according to their size in relation to the
          viewer's distance from them. (Byzantium and Italian Renaissance Art, n.d.)
          During the time many Renaissance artists including Leonardo da Vinci, were linear perspective used
          logically to create optical illusion in their compositions and also they were quite fascinated with the
          concept of ‘Anamorphosis’ throughout the period.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Anmorphosis is a Greek word meaning “to transform” and it's a method to create the distorted image,
          similar like a reflective mirrored image employs that only resolve into recognizable forms when viewed
          from a specific angle or it can be curved mirror. The first experiment appears from Leonardo da Vinci’s
          journal the study of an eye and child's head and anamorphic images give the impression of reshaping
          themselves when viewed from the perspective of an eccentric position or at an oblique angle; yet, it is
          the viewer who is responsible for the optical change.(Faust, 2018)
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Leonardo da Vinci; Anamorphosis:
          Study of the Eye; on the left, Juvenile
          Face, in Codex Atlanticus; ca.
          1478–1518; Milan, Biblioteca
          Ambrosiana; fol. 98r. (Leonardo da
          Vinci, Anamorphosis: Study of the Eye;
          on the left, Juvenile Face, in Codex
          Atlanticus ca. 1478–1518; Milan,
          Biblioteca Ambrosiana; fol. 98r. )
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/2.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Hans Holbein the Younger; Jean de Dinteville
          and Georges de Selve, also known as The
          Ambassadors; 1533; The National Gallery,
          London. (Holbein, H., The Ambassadors 1533
          The National Gallery, London)
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/3.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          In the similar study Faust (2018) stated that Hans
          Holbein’s "The Ambassadors" is featured
          distorted skull which is placed in the bottom
          centre of the composition. It is intended to be a
          visual dilemma because the viewer must approach
          the painting from high on the right side or low on
          the left side in order to see the form as an accurate
          portrayal of a human skull. Which is only visible in its entirety when the picture is viewed from the
          side. The skull is depicted in anamorphic perspective, which was another creation of the Early
          Renaissance. It is not apparent why Holbein put the skull such a prominent position in this painting,
          despite the fact that it is obvious that the skull was intended to be a vanitas style.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          In the centuries that followed, there was an apparent increase in the use of optical illusions for
          entertainment and scientific research. M.C. Escher, a renowned graphic designer of the 20th century,
          gained fame for his remarkable optical illusions. He achieved this by skillfully manipulating perspective
          and perception. He fascinated spectators with enigmatic artworks that delved into the concepts of
          relativity and infinity within a single composition, defying conventional knowledge.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Perspective and space are critical elements in Escher's work, as he played with vanishing points, relative
          size, and overlapping fusing figures to create the illusion of depth on a flat surface. Day and Night
          (1938) showcases monochromatic avian figures arranged in a pattern on a checkered rural landscape.
          Many of these photographs lack a clear demarcation between the foreground and background,
          allowing the observer to see either collection of objects as the foreground freely. (Poole, 2018) Escher's
          expertise in perspective and perception enabled him to develop a distinctive visual realitivity that
          combined mathematical concepts with imaginative storytelling. His works still captivate and puzzle
          spectators today, demonstrating the mind's ability to create and analyse the essence of
          existence.(Relativity by M. C. Escher, 2010)
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Day and Night, 1938, by MC Escher. Images
          courtesy of Collection Gemeentemuseum Den
          Haag/the MC Escher Company (MC Escher,
          Day and Night 1938 Gemeentemuseum Den
          Haag/the MC Escher Company)
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/4.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          (Vasarely, Vega-Nor 1969)
          In optical illusions, geometric repeated patterns are an
          indispensable instrument since they enable the
          production of the sense of motion, depth, and
          three-dimensionalism on a flat surface. Op Art
          movement pioneer Victor Vasarely created visually
          striking deceptions using complex geometric patterns.
          This method used geometric patterns and colours in
          direct opposition to one another to generate effects that pulsed and vibrated. The artwork he designed,
          referred to as "Vega-Nor," is constructed out of a grid of squares that give the sense of expanding and
          contracting, resulting in a mesmerising effect. A widespread tendency throughout that period
          characterised the Op art movement: using geometric colours and shapes to create optical
          illusions.(Buffalo AKG Art Museum, n.d.)
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/5.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Patrick Hughes and Reverspective</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>Patrick Hughes|À propos | Image Credit: https://www.riseart.com</p><br />

        <Image
          src="/assets/images/blog/blog_images/6.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          In the contemporary art scenario the renowned British artist Patrick
          Hughes is well-known for his inventive "reverspective" paintings,
          which produce arresting optical illusions through tactile structure
          with multiple vanishing points. Hughes, who was born in
          Birmingham in 1939, and had a first solo show in 1961 and became
          well-known for his reverse perspective-based technique.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Hughes experimented with out of wood pieces which he elevated of
          pyramid structure where he can integrates into ridged panoramas. After which he painted interior
          scenarios with popular great masters’ works, as well as landscapes and views of the city. It seems as
          though the sections of the works that are protruding are retreating, while the parts that are receding
          appear to protrude. This gives the impression that the compositions are moving as the viewers walk by
          them
        </p><br />

        <Image
          src="/assets/images/blog/blog_images/7.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Sticking Out Room, 1964,
          Patrick Hughes
          "Sticking Out Room," a
          picture of a room with a
          interior door seen from
          above, is one of Hughes's
          most well-known pieces.
          The room seems to change
          shape and perspective as the viewer moves around the picture. The
          interior door appear to get closer or farther away due to artist’s painted on the top of the 3D truncated
          pyramid structure. More specifically, the edge of what looks like the far wall with the door is closer to
          the watcher than the edges of the floor, walls, and ceiling. (Murray McDonald, n.d.)
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          To show the most common parts of the geometry of perspectives, Hughe show the front, side, and top
          views of a new piece called “Making Space” artwork (2016) Figure 2, which he has made up of four
          short pyramids. In both the top and side views, thick lines show the viewer's position, which makes it
          clear that the cut-off pyramids are sticking out towards them. (Papathomas & Hughes, 2019)
        </p><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>“Making Space” (2016) Figure 2-</h2><br />
        <Image
          src="/assets/images/blog/blog_images/8.png"
          alt="Image Description"
          width={300}
          height={250}
          className="section-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        /><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Hughes' retrospective paintings
          reveal to do more than trick the eye;
          he produces a sense of disorientation
          and surprise that can be both
          unsettling and enjoyable by messing
          with their expectations and
          questioning what they think they
          know about perspective.
        </p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Hughes achieves this by
          incorporating recognisable objects
          and scenes, such as home interiors, mundane objects, popular images, furniture, and landscapes. These
          elements create a sense of familiarity that initially deceives the viewer into a comforting illusion.
          However, as the observer navigates the artwork, these familiar components undergo distortion, leading
          to a feeling of discomfort and perplexity.
        </p>
        <br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Hughes effectively evokes emotions by skillfully employing the formal qualities of perspective, form,
          colour and composition. The artist's works frequently showcase vibrant and contrasting hues, evoking
          a strong sense of vigour and activity. The layered panels perceive depth and motion, with components
          appearing to protrude or retreat into the distance. It fosters a feeling of excitement and curiosity as the
          observer delves into the artwork and reveals fresh vantage points.
        </p>
        <br />
        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Patrick Hughes’s reverspective construction template
          <Image
            src="/assets/images/blog/blog_images/9.png"
            alt="Image Description"
            width={300}
            height={250}
            className="section-image"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          /><br />
        </h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>1. Print the second page on thick papaer.</p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>2. Cut out the figure along with solid lines.</p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>3. Fold the sticking out room models on dashed lines as shown in the diagram to the right.</p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>4. Tape or glue tabs A-D to their corresponding edges so that the dashed lines are not visible.</p>
        <br />
        <p className="section-paragraph" style={{ color: '#333' }}>5. Tape tabs E-H at the corners to secure the figure.</p>
        <br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Conclusion:</h2><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Throughout the evolution of art practice perspective and perception are powerful tools that artists
          have long used to construct optical illusions and challenge viewers' assumptions about reality. Some of
          the most interesting and thought-provoking works of art have always played significant role played in
          the perspective and perception how we see things. It is factual evident that across all artists has explored
          from the Renaissance to the present day. During the Renaissance, painters such as Leonardo da Vinci,
          Leon Battista Alberti, Raphel, Giotto, Hans Holbein and Masaccio explored the use of linear
          perspective to give the sense of depth and three-dimensionality on a flat surface. They were able to
          create scenes that looked to fade into space using techniques such as vanishing points, foreshortening,
          and declining size, luring the observer into an illusionistic realm. This mastery of perspective was a
          significant departure from the flattened, symbolic style of Byzantine art, Barque and Rococo that
          preceded it. However, some Renaissance artists like Leonardo da Vinci and Hans Holbein who have
          experimented with the concept of ‘Anamorphosis’ in their distorted character features in theri work
          and it can only be seen clearly when viewed from a specific angle
        </p><br />
        <p className="section-paragraph" style={{ color: '#333' }}>
          Some of them have chosen to subvert the conventions of perspective to create even more striking
          optical effects.M.C. Escher's woodcuts and lithographs challenge visual perception. Escher's paintings,
          such "Relativity" and "Ascending and Descending," use vanishing points and impossible geometries to
          create surreal sceneries. Escher's art questions viewers' expectations of reality and space, casting doubt
          on our visual experience. While British artist Patrick Hughes has evolved his own distinctive style
          termed "reverspective," which questions conventional perspective even more, Vasarely's Op Art
          paintings include geometric patterns that give the appearance of depth and movement. Hughes'
          paintings employ a technique where the parts closest to the viewer are put at the greatest distance,
          while the things farthest away are positioned nearest. The image has a dynamic and mutable nature,
          which elicits a disconcerting yet compelling impact on the viewer as they move around the artwork.
        </p><br />

        <p className="section-paragraph" style={{ color: '#333' }}>
          Hughes's art, like Escher's, tries to control how people feel by interfering with their assumptions. By
          showing familiar things and scenes, he gives the viewer a false sense of security, broken by the strange
          distortions of his retrospective method. It creates a feeling of wonder, confusion, and excitement,
          making people think about what they know about the world. The most important thing about these
          artists' work is that they are able to use viewpoint and perception to create new and surprising realities.
          These artists have pushed the limits of what is possible in the visual arts by making viewers question
          their ideas and interact with the art on a perceptual level. Their work shows how people have always
          been interested in the secrets of how we see and how much we can explore through art.
        </p><br />


        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Bibliography</h2><br />

        <a href="https://www.torch.ox.ac.uk/article/byzantium-and-italian-renaissance-art" target="_blank" rel="noopener noreferrer">Byzantium and Italian Renaissance art. (n.d.). TORCH | the Oxford Research Centre in the Humanities.</a><br />
        <a href="https://doi.org/10.5092/jhna.2018.10.2.2" target="_blank" rel="noopener noreferrer">Faust, M. (2018). “Eyed Awry”: Blind Spots and Memoria in the Zimmern Anamorphosis. Journal of Historians of Netherlandish Art, 10(2).</a><br />
        <a href="https://artincontext.org/trompe-loeil/" target="_blank" rel="noopener noreferrer">Meyer, I. (2023, August 1). Trompe l’Oeil – Trompe l’Oeil Painting Techniques With Examples. Art in Context.</a><br />
        <a href="https://www.patrickhughes.co.uk/about/interviews/murray-mcdonald/" target="_blank" rel="noopener noreferrer">Murray McDonald. (n.d.).</a><br />
        <a href="https://www.theguardian.com/artanddesign/2015/jun/20/the-impossible-world-of-mc-escher" target="_blank" rel="noopener noreferrer">Poole, S. (2018, December 4). The impossible world of MC Escher. The Guardian.</a><br />
        <a href="https://doi.org/10.3390/vision3040063" target="_blank" rel="noopener noreferrer">Papathomas, T. V., & Hughes, P. (2019). Hughes’s Reverspectives: Radical Uses of Linear Perspective on Non-Coplanar Surfaces. Vision, 3(4), 63.</a><br />
        <a href="http://www.scottmcd.net/artanalysis/?p=548" target="_blank" rel="noopener noreferrer">Relativity by M. C. Escher. (2010, February 1). Ideas Made of Light.</a><br />
        <a href="https://buffaloakg.org/artworks/k196929-vega-nor" target="_blank" rel="noopener noreferrer">Vega-Nor | Buffalo AKG Art Museum. (n.d.).</a><br />

        <h2 className="section-subtitle" style={{ color: '#ff9900', textAlign: 'left' }}>Image Citation</h2><br />

        <a href="https://en.wikipedia.org/wiki/De_pictura#/media/File:Della_Pittura_Alberti_perspective_vanishing_point.jpg" target="_blank" rel="noopener noreferrer">Alberti, L. B. (n.d.). Della pittura.</a><br />
        <a href="https://jhna.org/articles/eyed-awry-blind-spots-and-memoria-in-the-zimmern-anamorphis/#citation" target="_blank" rel="noopener noreferrer">da Vinci, L. (n.d.). “Eyed Awry”: Blind Spots and Memoria in the Zimmern Anamorphis. JOURNAL OF HISTORIANS OF NETHERLANDISH ART.</a><br />
        <a href="https://jhna.org/articles/eyed-awry-blind-spots-and-memoria-in-the-zimmern-anamorphis/#citation" target="_blank" rel="noopener noreferrer">Holbein, H. (n.d.). “Eyed Awry”: Blind Spots and Memoria in the Zimmern Anamorphis. JOURNAL OF HISTORIANS OF NETHERLANDISH ART.</a><br />
        <a href="https://en.wikipedia.org/wiki/De_pictura#/media/File:Della_Pittura_Alberti_perspective_vanishing_point.jpg" target="_blank" rel="noopener noreferrer">Wikipedia contributors. (2023, February 14). De pictura.</a><br />
        <a href="https://buffaloakg.org/artworks/k196929-vega-nor" target="_blank" rel="noopener noreferrer">Vasarely, V. (n.d.). Vega-Nor. Vega-Nor | Buffalo AKG Art Museum.</a><br />
      </div>
      <div className="blogger-details" style={{ paddingLeft: '10px' }}>
        <p className="blogger-name" style={{ color: '#333' }}>Regards,</p>
        <h4 className="blogger-name" style={{ color: '#ff9900' }}>S.Vijayaraghavan | MFA|PGDIE</h4>
        <p className="blogger-name" style={{ color: '#333' }}> Visual Artist, Visual Arts Faculty, IBDP-Examiner, MYP/DP Curriculum reviewer</p>
        <p className="blogger-name" style={{ color: '#333' }}> Head of the Department, KC High, Chennai </p>
        <br />
      </div>
      <div className="blogger-info-box" style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '10px', border: '2px solid #ff9900', borderRadius: '10px' }}>
        <div className="blogger-image" style={{ maxWidth: '200px', flexShrink: 0, marginRight: '20px' }}>
          <br />
        </div>
        <div className="blogger-details">
          <p className="blogger-name" style={{ color: '#333' }}>
            Vijayaraghavan.S (b.1981) is a Visual artist, Visual Arts facilitator, HoD in Visual Arts, IB examiner, and IB
            curriculum reviewer with more than a decade-long experience teaching school students in India and abroad. He
            received his Master of Fine Arts in Painting from the College of Art/University of Delhi (2008) and BAI
            advanced-level visual arts studio program at Berlin Art Institute, Berlin (2016), and PGDIE-IBDP certification
            from Christ Deemed University in Bangalore, India. (2024). He has facilitated IBDP SAIBSA (South Asian
            International Baccalaureate School Association) Job Alike Sessions at Hyderabad. He strongly believes that the
            contemporary art approach to teaching Visual Arts enables students to rediscover their intelligence towards
            relationships by creating links with multiple disciplines and capitalising on imaginative novelty. He is a prolific
            painter and video artist whose work explores the intersection between self and society. He have learned basic
            photojournalism under the tutelage of John Isaac, former Head of United Nations Photography, USA, and
            worked with Fredric Roberts, an award-winning photographer based in Los Angeles. Also, he have worked as a
            visual arts faculty-senior school at NPS International School, Singapore, a collaborative residency art project
            with eminent artist Kelly Reddy and Lasalle College of Arts, Singapore. He have participated in Fonland-Video
            art curatorial residency programme, Portugal and Babaran Segaragunung Cultural Art House and the Batik
            residency program at Yogyakarta, Indonesia. He has been nominated for audience and jury awards in the
            60-second short film festival by the Danish Art Foundation, Copenhagen, Denmark. Honorary Diploma in the
            2nd International Exhibition of Small Format Art, Lebanon. Viay’s work has been exhibited at museums and
            institutions including Danish Art Foundation, (Copenhagen), 59 rue de Rivoli, (Paris), BMECP Centre,
            (Brighton-UK), Leyden Gallery, (London), VideoBabel, (Spain), Lily Agius gallery, (Malta), CCA Centre for
            Contemporary Arts, (Glasgow), Galerie Toolbox, (Berlin), Miranda Kuo Gallery, (NY), Gallery Aferro, (NJ),
            LASALLE College of the Arts, (Singapore), Nomadic Festival Les Instants Vidéo, (France), Banff Center Banff,
            (Canada), FIVAC Camaguey, (Cuba), Gallery International, (Baltimore), Villa Paolina Bonaparte Museum of
            Viareggio, (Italy), PROYECTOR, (Spain) VIDEOHOLICA, (Bulgaria) SARAI READER 09” Curated by
            Raqs Media Collective - Devi Art Foundation, (New Delhi), Fugitive Video Project, (Nashville,USA) Hammer
            Museum (LA) NID - (Ahmadabad).
          </p>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;