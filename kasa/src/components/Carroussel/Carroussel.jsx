function Carroussel() {
   return (
      <section className="carroussel">
         <span className="material-symbols-outlined carroussel__chevron-left">
            chevron_left
         </span>
         <img
            className="carroussel__img"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="Bannière représentant un paysage d'une côte océanique"
         />
         <span className="material-symbols-outlined carroussel__chevron-right">
            chevron_right
         </span>
      </section>
   );
}

export default Carroussel;
