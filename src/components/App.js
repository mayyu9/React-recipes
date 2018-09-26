import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import Favourites from './Favourites';

// BrowserRoute renders only one child so wrap the route with parent
// exact prop to ensure that when exact path is matched then only it should render that component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
    };
  }

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

  // #TODO: favorites array is not getting populated.
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
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home state={this.state} toggleFavourite={this.toggleFavourite} />
              )}
            />
            <Route
              path="/favourites"
              render={() => (
                <Favourites state={this.state} toggleFavourite={this.toggleFavourite} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
