/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/christeam.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "re:Think 2023",
    description:
      "An event I organized on “The Future of Psychology: Discovering Limitless Possibilities”. Proud to lead this initiative that explored the most exciting innovations and disruptive technologies in psychology.",
    url: "https://www.facebook.com/AEPsBolivia/posts/pfbid0uTXMigxXTt2cQV5Bcx3xTKuPDfaqhtx1Ek8WVSbeVtSvwy5Rdrnd2paA3M5BdpGml",
  },
  {
    title: "CEO & Founder at AEPs Bolivia",
    description:
      "I founded AEPs Bolivia and we celebrate its 2nd anniversary in 2023, a psychology student organization that promotes professional and community growth in Bolivia..",
    url: "https://www.facebook.com/photo/?fbid=196680719991799&set=pob.100089496177340",
  },
  {
    title: "My Startup",
    description:
      "I founded a psychology startup with the vision of incorporating AI to optimize human resources processes and revolutionize the workplace.",
    url: "https://www.linkedin.com/company/mindspace-io/",
  },
  {
    title: "Speaker at events",
    description:
      "I am a speaker at tech events in my MLSA community and also at psychology events, sharing knowledge and fostering learning and collaboration in both areas.",
    url: "https://www.facebook.com/share/p/PhzkHcy2YQF3vsyN/?mibextid=oFDknk",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
