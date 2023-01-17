import { Link } from "react-router-dom";

function Card({ location }) {
   return (
      <Link to={`/logement/${location.id}`}>
         <div className="cards-location">
            <img
               className="cards-location__img"
               src={location.cover}
               alt={location.title}
            />
            <h2 className="cards-location__title">{location.title}</h2>
         </div>
      </Link>
   );
}

export default Card;
