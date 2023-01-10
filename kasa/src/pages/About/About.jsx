import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
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
         <Dropdown content={aboutContent} />
      </section>
   );
}

export default About;
