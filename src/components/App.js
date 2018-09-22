import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';


//fetching recipes data

fetch(`${API_URL}/v1/recipes`)
.then(res => res.json())
.then(json => console.log(json));


class App extends React.Component {
  render(){
    return(
    <div>
      <Header />
      <main style={ {display: 'flex'} }>
        <RecipeList />
        <RecipeDetails />
      </main>
    </div>
  );
  }
}


export default App;
