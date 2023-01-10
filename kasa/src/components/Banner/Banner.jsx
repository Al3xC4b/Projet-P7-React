function Banner(props) {
   const content = props.content;
   return (
      <section className={content.sectionClass}>
         <img
            className={content.imgClass}
            src={content.imgSrc}
            alt={content.alt}
         />
         {content.title && (
            <h1 className={content.titleClass}>{content.title}</h1>
         )}
      </section>
   );
}

export default Banner;
