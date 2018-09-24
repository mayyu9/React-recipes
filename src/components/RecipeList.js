import React from 'react';

const RecipeList = (props) =>{
  return(
    <div style={props.style}>
      <h2 className="h2">Recipes</h2>
      <ul className="list-reset">
        {props.recipes.map(recipe => (
          <li
            className="py2 border-bottom border-bottom-dashed pointer"
            key={recipe.id}
            //onClick={ props.onClick(recipe.id)}
            onClick={() => props.onClick(recipe.id) }
            >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
          </li>

        ))}

      </ul>
    </div>
  )
};

export default RecipeList;
// <li>
//   <span>Pulihogra</span>
//   <span>Semiya</span>
// </li>
// <li>
//   <span>Lemon Rice</span>
//   <span>Dhokla</span>
// </li>
// <li>
//   <span>Upma</span>
//   <span>Chow chow bath</span>
// </li>
// <li>
//   <span>Peanut butter</span>
//   <span>obbatu </span>
// </li>
