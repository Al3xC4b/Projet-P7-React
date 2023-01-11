function Tags(props) {
   const tags = props.tags;

   return (
      <div className="logement-title__tags">
         {tags.map((tag) => (
            <div className="logement-title__tag-name" key={tag}>
               {tag}
            </div>
         ))}
      </div>
   );
}

export default Tags;
