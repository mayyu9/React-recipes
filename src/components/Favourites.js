import React from 'react';
import RecipeList from './RecipeList';

const Favourites = ({ state }) => (
  <div className="px4">
    <h2 className="h2"> Favourites </h2>
    <RecipeList
      recipes={state.recipes}
    />
  </div>
);

export default Favourites;
