import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
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

  // converting the below function as arrow function, because to avoid explicit binding of the recipe objects on every click.
  // we need a stage zero preset for this.
  componentDidMount() {
    // fetching recipes data
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

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

  toggleFavourite = id => {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f.id !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    });
  };

  render() {
    const { recipes, favorites, currentRecipes } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            onClick={this.onRecipeClick}
            onFavourited={this.toggleFavourite}
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

export default Home;
