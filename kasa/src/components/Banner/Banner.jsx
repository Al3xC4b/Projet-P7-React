import banner from "../../assets/banner.jpg";

function Banner() {
   return (
      <section className="banner">
         <img
            className="banner__img"
            src={banner}
            alt="Bannière représentant un paysage d'une côte océanique"
         />
         <h1 className="banner__title">
            Chez vous,
            <br />
            partout et ailleurs
         </h1>
      </section>
   );
}

export default Banner;
