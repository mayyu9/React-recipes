import React from 'react';

const RecipeDetails = (props) =>{
  if(! props.currentRecipes){
    return (
      <p style={props.style}>Please the recipe to check all other deatils.</p>
    )
  }
  return(
    <div style={props.style}>
      <h2>{props.currentRecipes.name}</h2>
      <img alt={props.currentRecipes.name} src={props.currentRecipes.image} />
      <div>
        <span>category: {props.currentRecipes.category} </span>
        <span> Calories: {props.currentRecipes.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.currentRecipes.ingredients.map(ingredient => {
          return(
          <li key={ingredient}>
            {ingredient}
          </li>
        );
        })
      }
      </ul>
      <h3>steps</h3>
      <ul>
        {props.currentRecipes.steps.map( (step,index) => {
          return(
          <li key={index+1}>
            {step}
          </li>
        );
        })
      }
      </ul>
    </div>
  )
};

export default RecipeDetails;
