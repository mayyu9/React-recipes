import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../static/images/Logo.jpg';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);


const Header = () => (
  <header className="flex align-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">My Recipes App </h1>
      <span className="mr1">by</span>
      <img src={Logo} alt="logo" style={{ width: 30 }} />
    </div>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favourites">Favourites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
