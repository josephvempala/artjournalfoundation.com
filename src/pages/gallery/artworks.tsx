import Link from "next/link";
import withLayout from "@/components/layout";


const ArtworksPage = () => {
  // Static gallery data extracted from the Blade template
  const artworks = [
    {
      title: "Artwork 1",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork1.jpg",
    },
    {
      title: "Artwork 2",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork2.jpg",
    },
    {
      title: "Artwork 3",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork3.jpg",
    },
    {
      title: "Artwork 4",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork4.jpg",
    },
    {
      title: "Artwork 5",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork5.jpg",
    },
    {
      title: "Artwork 6",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork6.jpg",
    },
    {
      title: "Artwork 7",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork7.jpg",
    },
    {
      title: "Artwork 8",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork8.jpg",
    },
    {
      title: "Artwork 9",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork9.jpg",
    },
    {
      title: "Artwork 10",
      image:
        "https://static.artjournalfoundation.com/gallery_images/artwork10.jpg",
    },
  ];

  // Inline styles from the original Blade template (simplified)
  const customStyles = `
        .card {
            max-width: 300px;
            height: 200px;
            border: 1px solid #ddd;
            overflow: hidden; /* Added to contain zoom */
        }

        .card-img-top {
            width: 300px;
            height: 200px;
            object-fit: cover;
            transition: transform 0.2s;
            cursor: zoom-in;
        }

        .card:hover .card-img-top {
            transform: scale(1.1);
        }

        .card-title {
            text-align: center;
            max-height: 2rem;
            overflow: hidden;
        }
    `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/about-us-header.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 10,
            left: 0,
            width: "100%",
            height: "100%",
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
              <li>Artwork Gallery</li>
            </ul>
            <h2>Artwork Gallery</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      <section className="container">
        <h1 className="mt-5 mb-4 text-center">Artwork Gallery</h1>
        <p className="text-center">
          Note: Lightbox functionality is removed for this static Next.js
          migration.
        </p>

        <div className="row">
          {artworks.map((artwork, index) => (
            <div key={index} className="col-md-4 mb-4">
              <section>
                <div className="card">
                  {/* Link to image for basic functionality, replacing lightbox */}
                  <Link prefetch={false} href={artwork.image} target="_blank">
                    <img
                      src={artwork.image}
                      className="card-img-top"
                      alt={artwork.title}
                      loading="lazy"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{artwork.title}</h5>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default withLayout(ArtworksPage);
