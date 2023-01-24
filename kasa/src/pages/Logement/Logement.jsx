import { useParams, useNavigate } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";
import ErrorPage from "../404/404";

function FicheLogement() {
   const [logement, setLogement] = useState({});
   const [isDataLoading, setDataLoading] = useState(false);
   const navigate = useNavigate();
   const { logementId } = useParams();
   useEffect(() => {
      async function fetchLocation() {
         setDataLoading(true);
         try {
            const response = await fetch("/data/logements.json");
            const locations = await response.json();
            let found = false;
            for (let location of locations) {
               if (location.id === logementId) {
                  setLogement(location);
                  found = true;
                  break;
               }
            }
            if (!found) {
               navigate("/404");
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
   console.log(logement);
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
         ) : logement.id ? (
            <>
               <Carroussel pictures={logement.pictures} />
               <div className="logement-info">
                  <div className="logement-title">
                     <h1>{logement.title}</h1>
                     <div className="logement-title__location">
                        {logement.location && logement.location.split(" - ")[1]}
                        ,{" "}
                        {logement.location && logement.location.split(" - ")[0]}
                     </div>
                     {logement.tags && (
                        <div className="logement-title__tags">
                           {logement.tags.map((tag) => (
                              <Tag tag={tag} key={tag} />
                           ))}
                        </div>
                     )}
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
                                 <img
                                    src={logement.host.picture}
                                    alt="Profile"
                                 />
                              </div>
                           </>
                        )}
                     </div>
                  </div>
               </div>
               <div className="logement-description">
                  {description.map((content, index) => (
                     <Dropdown
                        title={content.title}
                        key={content.title + toString(index)}
                     >
                        {Array.isArray(content.text) ? (
                           <div className="drop-down__content">
                              <ul>
                                 {content.text.map((equipement) => (
                                    <li key={equipement}>{equipement}</li>
                                 ))}
                              </ul>
                           </div>
                        ) : (
                           <div className="drop-down__content">
                              {content.text}
                           </div>
                        )}
                     </Dropdown>
                  ))}
               </div>
            </>
         ) : (
            <ErrorPage />
         )}
      </section>
   );
}

export default FicheLogement;
