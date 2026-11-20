import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import initialRecipes from "./data/recipes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";

function App() {
  // Main application state maintained in App.jsx using useState
  const [recipes, setRecipes] = useState(initialRecipes);

  // Action function passed to pages through props to toggle favourite status
  const toggleFavourite = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavourite: !recipe.isFavourite }
          : recipe
      )
    );
  };

  // Live count of favourite recipes
  const favouriteCount = recipes.filter((r) => r.isFavourite).length;

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar favouriteCount={favouriteCount} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home recipes={recipes} />} />
            <Route
              path="/recipes"
              element={
                <Recipes
                  recipes={recipes}
                  onToggleFavourite={toggleFavourite}
                />
              }
            />
            <Route
              path="/recipes/:id"
              element={
                <RecipeDetails
                  recipes={recipes}
                  onToggleFavourite={toggleFavourite}
                />
              }
            />
            <Route
              path="/favourites"
              element={
                <Favourites
                  recipes={recipes}
                  onToggleFavourite={toggleFavourite}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
