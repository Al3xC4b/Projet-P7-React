import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function Cards() {
   const [locationList, setlocation] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   useEffect(() => {
      async function fetchLocation() {
         setDataLoading(true);
         try {
            const response = await fetch("../../../data/logements.json");
            const locations = await response.json();
            setlocation(locations);
         } catch (e) {
            console.log(e);
         } finally {
            setDataLoading(false);
         }
      }
      fetchLocation();
   }, []);
   return (
      <section id="location">
         {isDataLoading ? (
            <Loader />
         ) : (
            locationList.map((location) => (
               <div className="cards-location" key={location.id}>
                  <img
                     className="cards-location__img"
                     src={location.cover}
                     alt={location.title}
                  />
                  <h2 className="cards-location__title">{location.title}</h2>
               </div>
            ))
         )}
      </section>
   );
}

export default Cards;
