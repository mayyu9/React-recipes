import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipes:[],
      currentRecipes: undefined
    };
    //this.onRecipeClick=this.onRecipeClick.bind(this);
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

  //converting the below function as arrow function, because to avoid explicit binding of the recipe objects on every click.
  //we need a stage zero preset for this.

  onRecipeClick = (id) => {
    console.log(`${API_URL}/v1/recipes/${id}`)
    //fetching paticular recipe data
    fetch(`${API_URL}/v1/recipes/${id}`)
    .then(res1 => res1.json())
    .then(cRecipe => {
      //console.log('recipe:' +JSON.stringify(cRecipe));
      this.setState({currentRecipes: cRecipe})
    })
    // .catch(e => {
    //   console.log('error: '+JSON.stringify(e));
    // });

  }

  componentDidMount(){
    //fetching recipes data
    fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(recipes => {
      this.setState({recipes: recipes})
    });

  }
  render(){
    const {recipes, currentRecipes} = this.state;
    return(
    <div>
      <Header />
      <main className="px4 flex">
        <RecipeList
          onClick={this.onRecipeClick}
          recipes={recipes}
          style= { {flex: 3} }/>
        <RecipeDetails
          className = "ml4"
          currentRecipes = { currentRecipes}
          style= { {flex: 5} }/>
      </main>
    </div>
  );
  }
}


export default App;
