import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function Cards() {
   const [locationList, setLocation] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   const navigate = useNavigate();
   useEffect(() => {
      async function fetchLocation() {
         setDataLoading(true);
         try {
            const response = await fetch("../../../data/logements.json");
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

   const handleClick = (id) => {
      navigate(`/logement/${id}`);
   };
   console.log(locationList);
   return (
      <section id="locations">
         {isDataLoading ? (
            <Loader />
         ) : (
            locationList.map((location) => (
               <div
                  className="cards-location"
                  key={location.id}
                  onClick={() => handleClick(location.id)}
               >
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
