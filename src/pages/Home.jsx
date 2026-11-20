import React from "react";
import { Link } from "react-router";

function Home({ recipes }) {
  const totalRecipes = recipes.length;
  const vegRecipes = recipes.filter((r) => r.type === "Veg").length;
  const favouriteRecipes = recipes.filter((r) => r.isFavourite).length;

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Recipe Book 📖✨</h1>
        <p className="hero-intro">
          Discover mouth-watering dishes from around the world. Filter by cuisine
          or dietary preference, check cooking times, and save your favourite
          meals all in one place!
        </p>
        <div className="hero-actions">
          <Link to="/recipes" className="btn btn-primary">
            Explore All Recipes
          </Link>
          <Link to="/favourites" className="btn btn-secondary">
            View Favourites ({favouriteRecipes})
          </Link>
        </div>
      </section>

      <section className="summary-section">
        <h2 className="section-title">Recipe Summary</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-number">{totalRecipes}</div>
            <div className="stat-label">Total Recipes</div>
          </div>

          <div className="stat-card stat-veg">
            <div className="stat-icon">🥗</div>
            <div className="stat-number">{vegRecipes}</div>
            <div className="stat-label">Veg Recipes</div>
          </div>

          <div className="stat-card stat-fav">
            <div className="stat-icon">❤️</div>
            <div className="stat-number">{favouriteRecipes}</div>
            <div className="stat-label">Favourite Recipes</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
