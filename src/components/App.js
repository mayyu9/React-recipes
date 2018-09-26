import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favourites from './Favourites';

// BrowserRoute renders only one child so wrap the route with parent
// exact prop to ensure that when exact path is matched then only it should render that component
const App = () => (
  <BrowserRouter>
    <main>
    <Header />
      <Route exact path="/" component={Home} />
      <Route path="/favourites" component={Favourites} />
    </main>
  </BrowserRouter>
);

export default App;
