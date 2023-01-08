import BannerHome from "../../components/Banner/BannerHome.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

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
   return (
      <section id="locations">
         {isDataLoading ? (
            <Loader />
         ) : (
            <>
               <BannerHome />
               {locationList && <Cards locationList={locationList} />}
            </>
         )}
      </section>
   );
}

export default Home;
