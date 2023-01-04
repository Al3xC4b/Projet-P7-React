import { aboutContent } from "../../assets/aboutContent";
import { useEffect, useState } from "react";

function Dropdown() {
   const [content, setContent] = useState([]);
   useEffect(() => {
      setContent(aboutContent);
   }, []);

   return (
      <>
         {content.map((dropdown) => (
            <div className="drop-down" key={dropdown.id}>
               <div className="drop-down__title">
                  <h2>{dropdown.title}</h2>
                  <span className="material-symbols-outlined">expand_more</span>
               </div>
               <div className="drop-down__content">{dropdown.content}</div>
            </div>
         ))}
      </>
   );
}

export default Dropdown;
