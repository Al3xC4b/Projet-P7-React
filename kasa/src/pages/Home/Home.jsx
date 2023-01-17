import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import banner from "../../assets/bannerHome.jpg";

function Home() {
   const [locationList, setLocation] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   useEffect(() => {
      async function fetchLocation() {
         setDataLoading(true);
         try {
            const response = await fetch("/data/logements.json");
            const locations = await response.json();
            setLocation(locations);
         } catch (e) {
            console.log(e);
         } finally {
            setDataLoading(false);
         }
      }
      fetchLocation();
   }, []);

   const dataBanner = {
      sectionClass: "banner-home",
      imgClass: "banner-home__img",
      imgSrc: banner,
      alt: "Bannière représentant un paysage d'une côte océanique",
      titleClass: "banner-home__title",
      title: "Chez vous, partout et ailleurs",
   };

   console.log(locationList);

   return (
      <>
         {isDataLoading ? (
            <section id="locations">
               <Loader />
            </section>
         ) : (
            <>
               <Banner content={dataBanner} />
               <section id="locations">
                  {locationList &&
                     locationList.map((location) => (
                        <Card location={location} key={location.id} />
                     ))}
               </section>
            </>
         )}
      </>
   );
}

export default Home;
