import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'test Recipe',
  category: 'test category',
};

describe('<RecipeList />', () => {
  test('should not break if no recipe passed to RecipeListItem component', () => {
    const component = renderer.create(
      <RecipeListItem />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render when recipe passed to RecipeListItem component', () => {
    const component = renderer.create(
      <RecipeListItem recipe={testRecipe} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
