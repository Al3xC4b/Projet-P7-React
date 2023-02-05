import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutContent } from "../../assets/aboutContent";
import banner from "../../assets/bannerAbout.jpg";

function About() {
   const dataBanner = {
      sectionClass: "banner-about",
      imgClass: "banner-about__img",
      imgSrc: banner,
      alt: "Bannière représentant un paysage de montagne",
   };

   return (
      <section id="about">
         <Banner content={dataBanner} />
         {aboutContent.map((content, index) => (
            <Collapse
               title={content.title}
               key={content.title + toString(index)}
            >
               {Array.isArray(content.text) ? (
                  <div className="drop-down__content">
                     <ul>
                        {content.text.map((equipement) => (
                           <li key={equipement}>{equipement}</li>
                        ))}
                     </ul>
                  </div>
               ) : (
                  <div className="drop-down__content">{content.text}</div>
               )}
            </Collapse>
         ))}
      </section>
   );
}

export default About;
