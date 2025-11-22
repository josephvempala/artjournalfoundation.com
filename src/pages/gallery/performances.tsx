import Link from "next/link";
import withLayout from "@/components/layout";


const PerformancesPage = () => {
  const performances = [
    {
      video:
        "https://static.artjournalfoundation.com/gallery_images/videos/Performance-1.mp4",
      artist: "Aisha K Prabhu",
      school: "Primus Public School, Bangalore",
    },
    {
      video:
        "https://static.artjournalfoundation.com/gallery_images/videos/Performance-2.mp4",
      artist: "Amirta Vineeth",
      school: "Seth Anandram Jaipuria School, Lucknow",
    },
    {
      video:
        "https://static.artjournalfoundation.com/gallery_images/videos/Performance-3.mp4",
      artist: "Diya Ashar",
      school: "Podar International Sschool, Mumbai",
    },
    {
      video:
        "https://static.artjournalfoundation.com/gallery_images/videos/Performance-4.mp4",
      artist: "Keshav Prabhu",
      school: "Akshar Arbol International School, Chennai",
    },
    {
      video:
        "https://static.artjournalfoundation.com/gallery_images/videos/Performance-5.mp4",
      artist: "Niharika Singh",
      school: "Seth Anandram Jaipuria School, Lucknow",
    },
  ];

  return (
    <>
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
              <li>Performances</li>
            </ul>
            <h2>Performances</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      <section className="container">
        <h1 className="mt-5 mb-4 text-center">Performances</h1>

        <div className="container mt-5 pb-5">
          <h2 className="text-center mb-4"></h2>
          <div className="row">
            {performances.map((performance, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <video
                      width="100%"
                      height="250"
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                    >
                      <source src={performance.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div
                    className="card-footer"
                    style={{ backgroundColor: "#5071b8" }}
                  >
                    <p
                      className="text-center"
                      style={{ fontWeight: "bold", color: "white" }}
                    >
                      {performance.artist}
                    </p>
                    <p
                      className="text-center"
                      style={{ fontWeight: "bold", color: "white" }}
                    >
                      {performance.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default withLayout(PerformancesPage);
