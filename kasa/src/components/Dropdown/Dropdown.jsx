function Dropdown(props) {
   const content = props.content;

   return (
      <>
         {content.map((dropdown) => (
            <div className="drop-down" key={dropdown.id}>
               <div className="drop-down__title">
                  <h2>{dropdown.title}</h2>
                  <span className="material-symbols-outlined">expand_more</span>
               </div>
               <div className="drop-down__content">{dropdown.text}</div>
            </div>
         ))}
      </>
   );
}

export default Dropdown;
