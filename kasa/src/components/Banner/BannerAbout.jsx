import banner from "../../assets/bannerAbout.jpg";

function BannerAbout() {
   return (
      <section className="banner-about">
         <img
            className="banner-about__img"
            src={banner}
            alt="Bannière représentant un paysage d'une côte océanique"
         />
      </section>
   );
}

export default BannerAbout;
