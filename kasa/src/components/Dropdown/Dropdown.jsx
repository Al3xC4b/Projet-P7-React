function Dropdown({ content, hidden, setHidden, index }) {
   function handleClick(index) {
      hidden.splice(index, 1, !hidden[index]);
      setHidden([...hidden]);
   }
   return (
      <>
         <div className="drop-down">
            <div
               className="drop-down__title"
               onClick={() => handleClick(index)}
            >
               <h2>{content.title}</h2>
               {hidden[index] ? (
                  <span className="material-symbols-outlined">expand_more</span>
               ) : (
                  <span className="material-symbols-outlined">expand_less</span>
               )}
            </div>
            {!hidden[index] ? (
               Array.isArray(content.text) ? (
                  <div className="drop-down__content">
                     <ul>
                        {content.text.map((equipement) => (
                           <li key={equipement}>{equipement}</li>
                        ))}
                     </ul>
                  </div>
               ) : (
                  <div className="drop-down__content">{content.text}</div>
               )
            ) : null}
         </div>
      </>
   );
}

export default Dropdown;
