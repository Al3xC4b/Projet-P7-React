import { useEffect } from "react";
import { useState } from "react";

function Carroussel({ pictures }) {
   const [picture, setPicture] = useState(1);
   const [scrollAuto, setScrollAuto] = useState(1);
   const length = pictures.length;

   useEffect(() => {
      const interval = setInterval(() => {
         setPicture((previous) => (previous % length) + 1);
      }, 3000);
      if (!scrollAuto) {
         clearInterval(interval);
      }
      return () => clearInterval(interval);
   }, [scrollAuto]);

   console.log(length);
   console.log(picture);

   function handleClickChevronLeft() {
      if (picture !== 0) {
         setPicture(picture - 1);
      }
   }

   function handleClickChevronRight() {
      if (picture !== pictures.length) {
         setPicture(picture + 1);
      }
   }

   function isVisibleChevronLeft(picture, pictures) {
      return pictures.length !== 1 && picture !== 1;
   }

   function isVisibleChevronRight(picture, pictures) {
      return pictures.length !== 1 && picture !== pictures.length;
   }

   return (
      pictures && (
         <div
            className="carroussel"
            onMouseEnter={() => setScrollAuto(0)}
            onMouseLeave={() => setScrollAuto(1)}
         >
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
               src={pictures[picture ? picture - 1 : picture]}
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
