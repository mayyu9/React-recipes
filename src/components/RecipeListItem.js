import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ recipe, onFavourited, onClick }) => (
  <li
    className="py2 border-bottom border-bottom-dashed pointer"
    key={recipe.id}
    // onClick={ props.onClick(recipe.id)}
    onClick={() => onClick(recipe.id)}
  >
    <span className="mr1">
      <input
        type="checkbox"
        onClick={e => {
          e.stopPropogation();
          onFavourited(recipe.id);
        }
        }
      />
    </span>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.array,
  onClick: PropTypes.func,
  onFavourited: PropTypes.func,
};

export default RecipeListItem;
