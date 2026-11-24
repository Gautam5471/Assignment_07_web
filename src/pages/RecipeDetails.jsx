import React from "react";
import { useParams, Link } from "react-router";

function RecipeDetails({ recipes, onToggleFavourite }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));

  if (!recipe) {
    return (
      <div className="details-container">
        <div className="not-found-card">
          <h2>Recipe Not Found</h2>
          <p>The recipe you are looking for does not exist.</p>
          <Link to="/recipes" className="btn btn-primary">
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const isVeg = recipe.type === "Veg";
  const isQuick = recipe.cookingTime <= 20;

  return (
    <div className="details-container">
      <Link to="/recipes" className="back-link">
        ← Back to Recipes
      </Link>

      <div className="details-card">
        <div className="details-header">
          <span className="details-emoji">{recipe.emoji}</span>
          <div className="details-title-section">
            <h1 className="details-name">{recipe.name}</h1>
            <div className="details-badges">
              <span className={`badge ${isVeg ? "badge-veg" : "badge-non-veg"}`}>
                {recipe.type}
              </span>
              {isQuick && <span className="badge badge-quick">⚡ Quick</span>}
            </div>
          </div>
        </div>

        <div className="details-meta-grid">
          <div className="meta-item">
            <span className="meta-label">Cuisine</span>
            <span className="meta-value">{recipe.cuisine}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Cooking Time</span>
            <span className="meta-value">{recipe.cookingTime} mins</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Difficulty</span>
            <span className="meta-value">{recipe.difficulty}</span>
          </div>
        </div>

        <div className="details-ingredients-section">
          <h2 className="ingredients-heading">
            {recipe.ingredients.length} ingredients
          </h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="bullet">✓</span> {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="details-action-section">
          <button
            className={`btn-fav-toggle ${recipe.isFavourite ? "is-fav" : ""}`}
            onClick={() => onToggleFavourite(recipe.id)}
          >
            {recipe.isFavourite ? "❤ Remove from Favourites" : "♡ Add to Favourites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
