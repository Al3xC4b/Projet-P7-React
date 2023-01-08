function Tags(props) {
   const tags = props.tags;

   return (
      <div className="logement-info__tags">
         {tags.map((tag) => (
            <div className="logement-info__tag-name" key={tag}>
               {tag}
            </div>
         ))}
      </div>
   );
}

export default Tags;
