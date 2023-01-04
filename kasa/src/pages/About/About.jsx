import BannerAbout from "../../components/Banner/BannerAbout";
import Dropdown from "../../components/Dropdown/Dropdown";
import { aboutContent } from "../../assets/aboutContent";

function About() {
   return (
      <>
         <BannerAbout />
         <Dropdown content={aboutContent} />
      </>
   );
}

export default About;
