import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from 'pages/Home';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" element={<Home />}>
        Home
      </NavLink>
    </div>
  );
};

export default NavBar;