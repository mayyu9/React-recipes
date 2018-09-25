import React from 'react';
import propTypes from 'prop-types';

const RecipeList = props => {
  return (
    <div style={props.style}>
      <h2 className="h2">Recipes</h2>
      <ul className="list-reset">
        {props.recipes.map(recipe => (
          <li
            className="py2 border-bottom border-bottom-dashed pointer"
            key={recipe.id}
            // onClick={ props.onClick(recipe.id)}
            onClick={() => props.onClick(recipe.id)}
          >
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  style: propTypes.object,
  recipes: propTypes.object,
  onClick: propTypes.func,
};
export default RecipeList;
