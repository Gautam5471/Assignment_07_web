import React from "react";
import { Link } from "react-router";

function RecipeCard({ recipe, onToggleFavourite }) {
  const isVeg = recipe.type === "Veg";
  const isQuick = recipe.cookingTime <= 20;

  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <span className="recipe-emoji">{recipe.emoji}</span>
        <div className="recipe-badges">
          <span className={`badge ${isVeg ? "badge-veg" : "badge-non-veg"}`}>
            {recipe.type}
          </span>
          {isQuick && <span className="badge badge-quick">⚡ Quick</span>}
        </div>
      </div>

      <div className="recipe-card-body">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-cuisine">
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p className="recipe-time">
          <strong>Cooking Time:</strong> {recipe.cookingTime} mins
        </p>
        <p className="recipe-difficulty">
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
      </div>

      <div className="recipe-card-actions">
        <Link to={`/recipes/${recipe.id}`} className="btn-view-details">
          View Details
        </Link>
        <button
          className={`btn-fav-toggle ${recipe.isFavourite ? "is-fav" : ""}`}
          onClick={() => onToggleFavourite(recipe.id)}
        >
          {recipe.isFavourite ? "❤ Remove from Favourites" : "♡ Add to Favourites"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
