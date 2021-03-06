import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RecipeDetails = props => {
  if (!props.currentRecipes) {
    return (
      <p
        className={classNames('h3 p2 bg-white italic center', props.className)}
        style={props.style}
      >
        Please the recipe to check all other deatils.
      </p>
    );
  }
  return (
    <div
      className={classNames('p2 bg-white', props.className)}
      style={props.style}
    >
      <h2 className="h2">{props.currentRecipes.name}</h2>
      <img
        className="fit"
        alt={props.currentRecipes.name}
        src={props.currentRecipes.image}
        style={{ maxWidth: '100% ' }}
      />
      <div>
        <span>category: {props.currentRecipes.category} </span>
        <span> Calories: {props.currentRecipes.calories}</span>
      </div>
      <h3>Ingredients</h3>
      {props.currentRecipes.ingredients &&
      <ul>
        {props.currentRecipes.ingredients.map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    }
      <h3>steps</h3>
      {props.currentRecipes.steps &&
      <ul>
        {props.currentRecipes.steps.map((step, index) => {
          return <li key={index + 1}>{step}</li>;
        })}
      </ul>
    }
    </div>
  );
};

/* eslint react/prop-types: 0 */
RecipeDetails.propTypes = {
  currentRecipes: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

RecipeDetails.defaultProps= {

};
export default RecipeDetails;
