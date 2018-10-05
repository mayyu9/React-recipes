import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

// const testRecipe = {
//   id: 1,
//   name: 'test Recipe',
//   category: 'test category',
//   ingredient: ['intg 1', 'intg 2', 'intg 3'],
//   steps: ['step 1', 'step 2', 'step 3'],
// };

// const testRecipeIntg = {
//   id: 1,
//   name: 'test Recipe',
//   category: 'test category',
//   steps: ['step 1', 'step 2', 'step 3'],
// };
//
// const testRecipeStep = {
//   id: 1,
//   name: 'test Recipe',
//   category: 'test category',
//   ingredient: ['intg 1', 'intg 2', 'intg 3'],
// };

describe('<RecipeDetails />', () => {
  let testRecipe;
  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'test Recipe',
      category: 'test category',
      ingredient: ['intg 1', 'intg 2', 'intg 3'],
      steps: ['step 1', 'step 2', 'step 3'],
    };
  });

  test('should render RecipeDetails component, with zero state', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetails />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render RecipeDetails component, with recipe details', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetails currentRecipes={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render RecipeDetails component, with recipe className', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetails currentRecipes={testRecipe} className="test-className" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render RecipeDetails component, recipe without ingredients', () => {
    delete testRecipe.ingredient;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetails currentRecipes={testRecipe} className="test-intg" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render RecipeDetails component, recipe without steps', () => {
    delete testRecipe.steps;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetails currentRecipes={testRecipe} className="test-step" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
