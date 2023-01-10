import { useParams } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";

function FicheLogement() {
   const [logement, setLogement] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   const { logementId } = useParams();
   useEffect(() => {
      async function fetchLocation() {
         setDataLoading(true);
         try {
            const response = await fetch("/data/logements.json");
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   let description = [];
   if (logement.description) {
      description.push(
         {
            title: "Descrition",
            text: logement.description,
         },
         {
            title: "Équipements",
            text: logement.equipments,
         }
      );
   }

   return (
      <section id="logement">
         {isDataLoading ? (
            <Loader />
         ) : (
            <>
               <Carroussel pictures={logement.pictures} />
               <div className="logement-info">
                  <h1>{logement.title}</h1>
                  <div className="logement-info__location">
                     {logement.location && logement.location.split(" - ")[1]},{" "}
                     {logement.location && logement.location.split(" - ")[0]}
                  </div>
                  {logement.tags && <Tags tags={logement.tags} />}
               </div>
               <div className="logement-rate-and-host">
                  {logement.rating && <Rating rating={logement.rating} />}
                  <div className="host">
                     {logement.host && (
                        <>
                           <div className="host__name">
                              {logement.host.name &&
                                 logement.host.name.split(" ")[0]}
                              {"\n"}
                              {logement.host.name.split(" ")[1]}
                           </div>
                           <div className="host__picture">
                              <img src={logement.host.picture} alt="Profile" />
                           </div>
                        </>
                     )}
                  </div>
               </div>
               <div className="logement-description">
                  <Dropdown content={description} />
               </div>
            </>
         )}
      </section>
   );
}

export default FicheLogement;
