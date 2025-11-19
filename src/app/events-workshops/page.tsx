import Link from "next/link";

const EventsWorkshopsPage = () => {
  // Static workshop data extracted from the Blade template
  const workshops = [
    {
      topic: "Madhubani",
      medium: "Watercolor on paper",
      dateTime: "15th and 16th July & 11-12 AM (IST)",
      age: "Any age group",
      materials: "Watercolors, Watercolor paper",
      description:
        "Learn different motifs. Learn to create Step by step guidance",
      cost: "₹ 499",
    },
    {
      topic: "Pichwai",
      medium: "Acrylic colors on canvas",
      dateTime: "21-22 July & 3-4PM (IST)",
      age: "Any age group",
      materials:
        "Acrylic colors or poster colors, Canvas or paper depending on color medium.",
      description:
        "Step by step guidance, Understanding Motifs and symbolism, Cultural and historical understanding.",
      cost: "₹ 499",
    },
    {
      topic: "Botanical Art",
      medium: "Pen Shading Techniques",
      dateTime: "13th - 14th July & 3-4PM (IST)",
      age: "Any age group",
      materials:
        "Sketch book, A- 4 size paper , pencil Micron pens -0.3, 0.5, 0.8.",
      description:
        "Learning different pen art techniques. Learning to draw different types of flowers and leaves. Step by step guidance",
      cost: "₹ 499",
    },
    {
      topic: "Pencil Shading",
      medium: "Shading pencils",
      dateTime: "15th - 16th July & 3-4.30PM (IST)",
      age: "Age 5+",
      materials: "HB, 2B,4B,6B,8B, 10B Pencils. Drawing a-4 or a-3 size sheet.",
      description:
        "Create still life or landscape. Understanding Colour value Step by step guidance",
      cost: "₹ 199",
    },
    {
      topic: "Stained Glass Painting",
      medium: "Oil pastel on paper.",
      dateTime: "17th July & 3-4PM (IST)",
      age: "Age 5+",
      materials: "Black paper - a-4 size or a-3 size, Pencil, Oil pastels",
      description:
        "Learning technique of faux glass painting. Reverse painting technique. Step by step guidance",
      cost: "₹ 199",
    },
    {
      topic: "Islamic Art",
      medium: "Color pencils or watercolors on paper.",
      dateTime: "18th -19th July & 3-4.30PM (IST)",
      age: "Age 11+",
      materials:
        "Geometry box, Color pencils Water colors, Drawing sheet - A- 4 size. Rough paper for practice.",
      description:
        "Learn different styles of techniques of tile making. Exploring islamic geometric patterns. Cultural and historical understanding. Step by step guidance.",
      cost: "₹ 499",
    },
    {
      topic: "Mindful Mandala",
      medium: "Therapeutic Art",
      dateTime: "21st July & 3-4PM (IST)",
      age: "Any age group.",
      materials: "A-4 size papers,Color pencils",
      description:
        "Step by step guidance Guided visualization meditation. Practice powerful De- stressing and mindfulness through mandalas.",
      cost: "₹ 99",
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
              "url(/assets/images/backgrounds/student-banner1.webp)",
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
              <li>Online Art Workshops</li>
            </ul>
            <h2>Online Art Workshops</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Form Start - Simplified to static content */}
      <section className="event-form-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <img
                src="https://static.artjournalfoundation.com/events/online_art_workshop.jpg"
                alt="Online Art Workshop"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/* Form is replaced with a static placeholder */}
              <div className="event-art-form">
                <h2 className="subtitle-event">Online Workshop Details</h2>
                <hr />
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Topic</th>
                        <th>Medium of exploration</th>
                        <th>Date & Time</th>
                        <th>Age</th>
                        <th>Materials needed</th>
                        <th>Description things covered</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workshops.map((workshop, index) => (
                        <tr key={index}>
                          <td>{workshop.topic}</td>
                          <td>{workshop.medium}</td>
                          <td>{workshop.dateTime}</td>
                          <td>{workshop.age}</td>
                          <td>{workshop.materials}</td>
                          <td>{workshop.description}</td>
                          <td>{workshop.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="subtitle-event">Registration</h2>
                <hr />
                <p>
                  The original form and payment gateway logic have been removed
                  for this static Next.js migration.
                </p>
                <p>Please contact us to register for a workshop.</p>
                <Link prefetch={false} href="/contact-us" className="thm-btn">
                  Contact Us to Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form End */}
    </>
  );
};

export default EventsWorkshopsPage;
