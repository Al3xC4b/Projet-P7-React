import { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

function Dropdown(props) {
   const content = props.content;
   let stateIntit = [];
   for (let i = 0; i < props.content.length; i++) {
      stateIntit.push(true);
   }
   const [hidden, setHidden] = useState(stateIntit);
   const parentRef = useRef();

   useEffect(() => {
      if (parentRef.current) {
         autoAnimate(parentRef.current);
      }
   }, [parentRef]);

   function handleClick(index) {
      hidden.splice(index, 1, !hidden[index]);
      setHidden([...hidden]);
   }
   return (
      <>
         {content.map((dropdown, index) => (
            <div className="drop-down" key={dropdown.title} ref={parentRef}>
               <div className="drop-down__title">
                  <h2>{dropdown.title}</h2>
                  {hidden[index] ? (
                     <span
                        className="material-symbols-outlined"
                        onClick={() => handleClick(index)}
                     >
                        expand_more
                     </span>
                  ) : (
                     <span
                        className="material-symbols-outlined"
                        onClick={() => handleClick(index)}
                     >
                        expand_less
                     </span>
                  )}
               </div>
               {!hidden[index] ? (
                  Array.isArray(dropdown.text) ? (
                     <div className="drop-down__content">
                        <ul>
                           {dropdown.text.map((equipement) => (
                              <li key={equipement}>{equipement}</li>
                           ))}
                        </ul>
                     </div>
                  ) : (
                     <div className="drop-down__content">{dropdown.text}</div>
                  )
               ) : null}
            </div>
         ))}
      </>
   );
}

export default Dropdown;
