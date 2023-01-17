import { useEffect } from "react";
import { useState } from "react";

function Carroussel({ pictures }) {
   const [picture, setPicture] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setPicture((previous) => previous + 1);
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   console.log(picture);

   function handleClickChevronLeft() {
      if (picture !== 0) {
         setPicture(picture - 1);
      }
   }

   function handleClickChevronRight() {
      if (picture !== pictures.length - 1) {
         setPicture(picture + 1);
      }
   }

   function isVisibleChevronLeft(picture, pictures) {
      return pictures.length !== 1 && picture !== 0;
   }

   function isVisibleChevronRight(picture, pictures) {
      return pictures.length !== 1 && picture !== pictures.length - 1;
   }

   pictures && console.log(pictures[picture]);
   return (
      pictures && (
         <div className="carroussel">
            {isVisibleChevronLeft(picture, pictures) && (
               <span
                  className="material-symbols-outlined carroussel__chevron-left"
                  onClick={() => handleClickChevronLeft()}
               >
                  chevron_left
               </span>
            )}
            <img
               className="carroussel__img"
               src={pictures[picture]}
               alt="Bannière représentant un paysage d'une côte océanique"
            />
            {isVisibleChevronRight(picture, pictures) && (
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
