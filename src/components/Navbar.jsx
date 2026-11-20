import React from "react";
import { Link } from "react-router";

function Navbar({ favouriteCount }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🍳 Recipe Book
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/recipes" className="nav-link">
            Recipes
          </Link>
          <Link to="/favourites" className="nav-link nav-favourite-link">
            Favourites
            <span className="nav-badge">{favouriteCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
