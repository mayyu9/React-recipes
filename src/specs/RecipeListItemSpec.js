import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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

  test('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const component = mount(
      <RecipeListItem recipe={testRecipe} onClick={onClick} />,
    );
    component.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });

  test('should call onFavourited when clicked', () => {
    const onFavourited = jest.fn();
    const onClick = jest.fn();
    const component = mount(
      <RecipeListItem recipe={testRecipe} onClick={onClick} onFavourited={onFavourited} />,
    );
    component.find('span').first().simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
    expect(onFavourited.mock.calls.length).toBe(0);
  });
});
