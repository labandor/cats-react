import React from "react";
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cats">Cats</NavLink>
      <NavLink to="/add-cat">Add New Cat</NavLink>
    </nav>
  );
}

export default Nav;
