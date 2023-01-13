import { useState, useEffect } from "react";

function Dropdown(props) {
   const content = props.content;
   const [hidden, setHidden] = useState(true);
   const [render, setRender] = useState(!hidden);
   const [classHide, setClassHide] = useState("drop-down__content");

   useEffect(() => {
      if (!hidden) setRender(true);
   }, [hidden]);

   function handleClick() {
      setHidden(!hidden);
   }

   function handleClickLess() {
      setHidden(!hidden);
      setClassHide("drop-down__content drop-down__content--hide");
   }

   const onAnimationEnd = () => {
      if (hidden) {
         setRender(false);
         setClassHide("drop-down__content");
      }
   };
   console.log("render", render);
   console.log("hidden", hidden);

   return (
      <>
         <div className="drop-down">
            <div className="drop-down__title">
               <h2>{content[0].title}</h2>
               {hidden ? (
                  <span
                     className="material-symbols-outlined"
                     onClick={() => handleClick()}
                  >
                     expand_more
                  </span>
               ) : (
                  <span
                     className="material-symbols-outlined"
                     onClick={() => handleClickLess()}
                  >
                     expand_less
                  </span>
               )}
            </div>

            {render && (
               <div className={classHide} onAnimationEnd={onAnimationEnd}>
                  {content[0].text}
               </div>
            )}
         </div>
      </>
   );
}

export default Dropdown;
