import BannerAbout from "../../components/Banner/BannerAbout";
import Dropdown from "../../components/Dropdown/Dropdown";
import { aboutContent } from "../../assets/aboutContent";

function About() {
   return (
      <section id="about">
         <BannerAbout />
         <Dropdown content={aboutContent} />
      </section>
   );
}

export default About;
