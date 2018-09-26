import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipes: undefined,
    };
    // this.toggleFavourite = this.toggleFavourite.bind(this);
  }

  // onRecipeClick (id){
  //   console.log(`${API_URL}/v1/recipes/${id}`)
  //   //fetching paticular recipe data
  //   fetch(`${API_URL}/v1/recipes/${id}`)
  //   .then(res1 => res1.json())
  //   .then(cRecipe => {
  //     //console.log('recipe:' +JSON.stringify(cRecipe));
  //     this.setState({currentRecipes: cRecipe})
  //   })
  //   // .catch(e => {
  //   //   console.log('error: '+JSON.stringify(e));
  //   // });
  //
  // }

  onRecipeClick = id => {
    // fetching paticular recipe data
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res1 => res1.json())
      .then(cRecipe => {
        // console.log('recipe:' +JSON.stringify(cRecipe));
        this.setState({ currentRecipes: cRecipe });
      });
    // .catch(e => {
    //   console.log('error: '+JSON.stringify(e));
    // });
  };

  render() {
    const { recipes, favorites } = this.props.state;
    const { currentRecipes } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            onClick={this.onRecipeClick}
            onFavourited={this.props.toggleFavourite}
            favorites={favorites}
            recipes={recipes}
            style={{ flex: 3 }}
          />
          <RecipeDetails
            className="ml4"
            currentRecipes={currentRecipes}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Home;
