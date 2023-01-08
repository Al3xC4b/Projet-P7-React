function Rating(props) {
   const rating = parseInt(props.rating);
   const range = [1, 2, 3, 4, 5];

   return (
      <div className="rating">
         {range.map((elem) =>
            rating >= elem ? (
               <span
                  key={elem.toString()}
                  className="material-symbols-outlined star-fullfiled"
               >
                  star_rate
               </span>
            ) : (
               <span
                  key={elem.toString()}
                  className="material-symbols-outlined star-empty"
               >
                  star_rate
               </span>
            )
         )}
      </div>
   );
}

export default Rating;
