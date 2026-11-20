import React from "react";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";

function Favourites({ recipes, onToggleFavourite }) {
  // Filter favourite recipes using filter()
  const favouriteRecipes = recipes.filter((r) => r.isFavourite);

  // Calculate total cooking time
  const totalCookingTime = favouriteRecipes.reduce(
    (sum, recipe) => sum + recipe.cookingTime,
    0
  );

  return (
    <div className="favourites-container">
      <div className="page-header">
        <h2>My Favourite Recipes</h2>
        <p className="page-subtitle">
          Your saved recipes and total cooking preparation time.
        </p>
      </div>

      {favouriteRecipes.length > 0 ? (
        <>
          <div className="favourites-summary-bar">
            <div className="summary-info">
              <span>Saved Recipes: <strong>{favouriteRecipes.length}</strong></span>
              <span className="summary-divider">•</span>
              <span>Total Cooking Time: <strong>{totalCookingTime} mins</strong></span>
            </div>
          </div>

          <div className="recipe-grid">
            {favouriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onToggleFavourite={onToggleFavourite}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">💔</div>
          <h3 className="empty-heading">No favourites yet</h3>
          <p className="empty-text">
            You haven't added any recipes to your favourites list.
          </p>
          <Link to="/recipes" className="btn btn-primary">
            Explore Recipes & Add Some!
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favourites;
