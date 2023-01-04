import banner from "../../assets/bannerHome.jpg";

function BannerHome() {
   return (
      <section className="banner-home">
         <img
            className="banner-home__img"
            src={banner}
            alt="Bannière représentant un paysage d'une côte océanique"
         />
         <h1 className="banner-home__title">
            Chez vous,
            <br />
            partout et ailleurs
         </h1>
      </section>
   );
}

export default BannerHome;
