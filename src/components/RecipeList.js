import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, style, ...props }) => {
  return (
    <div style={style}>
      <h2 className="h2">Recipes</h2>
      <ul className="list-reset">
        {recipes.map(recipe => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            {...props}
          />
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  onFavourited: PropTypes.func,
};

RecipeList.defaultProps = {
  recipes: [],
};

export default RecipeList;
