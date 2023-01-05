import { useParams } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

function FicheLogement() {
   const [logement, setLogement] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   const { logementId } = useParams();

   useEffect(() => {
      async function fetchLocation() {
         setDataLoading(true);
         try {
            const response = await fetch("../../../data/logements.json");
            const locations = await response.json();
            for (let location of locations) {
               if (location.id === logementId) {
                  setLogement(location);
                  break;
               }
            }
         } catch (e) {
            console.log(e);
         } finally {
            setDataLoading(false);
         }
      }
      fetchLocation();
   }, []);
   return (
      <section id="logement">
         {isDataLoading ? (
            <Loader />
         ) : (
            <>
               <Carroussel />
               <h1>{logement.title}</h1>
               <div className="location">{logement.location}</div>
            </>
         )}
      </section>
   );
}

export default FicheLogement;
