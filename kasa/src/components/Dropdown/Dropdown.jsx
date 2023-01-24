import { useState } from "react";

function Dropdown({ title, children }) {
   const [hidden, setHidden] = useState(true);
   function handleClick() {
      setHidden(!hidden);
   }
   return (
      <>
         <div className="drop-down">
            <div className="drop-down__title" onClick={() => handleClick()}>
               <h2>{title}</h2>
               {hidden ? (
                  <span className="material-symbols-outlined">expand_more</span>
               ) : (
                  <span className="material-symbols-outlined">expand_less</span>
               )}
            </div>
            {!hidden ? <>{children}</> : null}
         </div>
      </>
   );
}

export default Dropdown;
