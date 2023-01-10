import { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

function Carroussel(props) {
   const pictures = props.pictures;
   const [picture, setPicture] = useState(0);
   const parentRef = useRef();

   useEffect(() => {
      if (parentRef.current) {
         autoAnimate(parentRef.current);
      }
   }, [parentRef]);

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
         <div className="carroussel" ref={parentRef}>
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
