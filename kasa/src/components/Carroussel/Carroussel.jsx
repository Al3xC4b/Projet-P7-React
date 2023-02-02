import { useEffect } from "react";
import { useState } from "react";

function Carroussel({ pictures }) {
   const [picture, setPicture] = useState(1);
   const [scrollAuto, setScrollAuto] = useState(true);
   const length = pictures.length;

   useEffect(() => {
      const interval = setInterval(() => {
         setPicture((previous) => (previous % length) + 1);
      }, 3000);
      if (!scrollAuto) {
         clearInterval(interval);
      }
      return () => clearInterval(interval);
      // eslint-disable-next-line
   }, [scrollAuto]);

   function handleClickChevronLeft() {
      if (picture > 1) {
         setPicture(picture - 1);
      } else if (picture === 1) {
         setPicture(length);
      }
   }

   function handleClickChevronRight() {
      if (picture < length) {
         setPicture(picture + 1);
      } else if (picture === length) {
         setPicture(1);
      }
   }

   function isVisibleChevron(pictures) {
      return pictures.length !== 1;
   }

   return (
      pictures && (
         <div
            className="carroussel"
            onMouseEnter={() => setScrollAuto(false)}
            onMouseLeave={() => setScrollAuto(true)}
         >
            <div className="carroussel__page">
               {picture}/{length}
            </div>
            {isVisibleChevron(pictures) && (
               <span
                  className="material-symbols-outlined carroussel__chevron-left"
                  onClick={() => handleClickChevronLeft()}
               >
                  chevron_left
               </span>
            )}
            <img
               className="carroussel__img"
               src={pictures[picture ? picture - 1 : picture]}
               alt="Bannière représentant un paysage d'une côte océanique"
            />

            {isVisibleChevron(pictures) && (
               <span
                  className="material-symbols-outlined carroussel__chevron-right"
                  onClick={() => handleClickChevronRight()}
               >
                  chevron_right
               </span>
            )}
         </div>
      )
   );
}

export default Carroussel;
