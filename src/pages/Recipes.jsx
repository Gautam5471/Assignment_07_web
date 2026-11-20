import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipes, onToggleFavourite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortByTime, setSortByTime] = useState("default");

  // Filter recipes based on type and search query using filter()
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesType = typeFilter === "All" || recipe.type === typeFilter;
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Special rule: Sort a copy ([...list].sort()), never the state array
  const displayedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortByTime === "low-to-high") {
      return a.cookingTime - b.cookingTime;
    }
    if (sortByTime === "high-to-low") {
      return b.cookingTime - a.cookingTime;
    }
    return 0;
  });

  return (
    <div className="recipes-container">
      <div className="page-header">
        <h2>All Recipes</h2>
        <p className="page-subtitle">
          Browse, filter, and sort delicious recipes tailored to your taste.
        </p>
      </div>

      <div className="controls-bar">
        {/* Search Input */}
        <div className="control-group search-group">
          <label htmlFor="search-input">Search:</label>
          <input
            id="search-input"
            type="text"
            placeholder="Search by recipe or cuisine..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-control"
          />
        </div>

        {/* Dropdown Filter: type (All, Veg, Non-Veg) */}
        <div className="control-group">
          <label htmlFor="type-filter">Dietary Type:</label>
          <select
            id="type-filter"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="select-control"
          >
            <option value="All">All</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        {/* Dropdown Sort: cooking time (Low → High, High → Low) */}
        <div className="control-group">
          <label htmlFor="time-sort">Sort by Cooking Time:</label>
          <select
            id="time-sort"
            value={sortByTime}
            onChange={(e) => setSortByTime(e.target.value)}
            className="select-control"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Low → High</option>
            <option value="high-to-low">High → Low</option>
          </select>
        </div>
      </div>

      {displayedRecipes.length > 0 ? (
        <div className="recipe-grid">
          {displayedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-text">No recipes found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
