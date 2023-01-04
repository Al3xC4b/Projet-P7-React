import { useEffect, useState } from "react";

function Dropdown(props) {
   const [content, setContent] = useState([]);
   useEffect(() => {
      setContent(props.content);
   }, [props.content]);

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
