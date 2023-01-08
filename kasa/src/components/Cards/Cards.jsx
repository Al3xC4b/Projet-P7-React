import { useNavigate } from "react-router-dom";

function Cards(props) {
   const navigate = useNavigate();
   const locationList = props.locationList;

   const handleClick = (id) => {
      navigate(`/logement/${id}`);
   };

   return (
      <>
         {locationList.map((location) => (
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
         ))}
      </>
   );
}

export default Cards;
