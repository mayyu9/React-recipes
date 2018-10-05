import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const testRecipe = [
  {
    id: 1,
    name: 'test Recipe',
    category: 'test category',
  },
];

describe('<RecipeList />', () => {
  test('should not break if no recipe passed to RecipeList component', () => {
    const component = renderer.create(
      <RecipeList />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render when recipe passed to RecipeListItem component', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipe} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
