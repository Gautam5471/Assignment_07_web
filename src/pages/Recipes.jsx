import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipes, onToggleFavourite }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = recipes.filter((recipe) => {
    const matchType = type === "All" || recipe.type === type;
    const matchSearch =
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const sortedRecipes = [...filtered].sort((a, b) => {
    if (sortBy === "low-to-high") {
      return a.cookingTime - b.cookingTime;
    }
    if (sortBy === "high-to-low") {
      return b.cookingTime - a.cookingTime;
    }
    return 0;
  });

  return (
    <div className="recipes-container">
      <div className="page-header">
        <h2>All Recipes</h2>
        <p className="page-subtitle">Browse, filter, and find recipes.</p>
      </div>

      <div className="controls-bar">
        <div className="control-group search-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search by recipe or cuisine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-control"
          />
        </div>

        <div className="control-group">
          <label>Dietary Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="select-control"
          >
            <option value="All">All</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        <div className="control-group">
          <label>Sort by Time:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select-control"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Low → High</option>
            <option value="high-to-low">High → Low</option>
          </select>
        </div>
      </div>

      {sortedRecipes.length > 0 ? (
        <div className="recipe-grid">
          {sortedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-text">No recipes found.</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
