function Tags(props) {
   const tags = props.tags;

   return (
      <div className="tags">
         {tags.map((tag) => (
            <div className="tags__name" key={tag}>
               {tag}
            </div>
         ))}
      </div>
   );
}

export default Tags;
