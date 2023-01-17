function Banner({ content }) {
   return (
      <section className={content.sectionClass || "banner-home"}>
         <img
            className={content.imgClass || "banner-home__img"}
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
