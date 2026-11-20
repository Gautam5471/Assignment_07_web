# Web 301 — Advance Frontend Engineering: Midsem Phase 2

## Student Information
- **Student Name:** Gautam Kumar
- **Roll Number:** 220001001 *(Please update with your official roll number)*
- **Assigned Problem Statement:** **P3 — Recipe Book**

---

## Getting Started

### 1. Install Dependencies
Run the following command to install all necessary packages:
```bash
npm install
```

### 2. Run the Application
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

### 3. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## Problem Statement P3 — Recipe Book Specifications

- **Dataset:** `src/data/recipes.js`
- **Routes:**
  - `/` : **Home** (Displays title, introduction, and summary counts for total, veg, and favourite recipes)
  - `/recipes` : **Recipe List** (Searchable and filterable list with dietary filter and cooking time sorting)
  - `/recipes/:id` : **Recipe Details** (Detailed view with "N ingredients" and ingredient list)
  - `/favourites` : **Saved Favourites** (Displays favourite recipes and total cooking time, or "No favourites yet")

### Key Features & Rules Implemented:
1. **Reusable `RecipeCard` Component**: Shows emoji, recipe name, cuisine, cooking time (min), difficulty, and action toggle.
2. **Badges**:
   - `Veg` (green badge) or `Non-Veg` (red badge) based on `type`.
   - Extra `⚡ Quick` badge if `cookingTime <= 20`.
3. **Favourite Toggle Button**:
   - `"♡ Add to Favourites"` ↔ `"❤ Remove from Favourites"` (`isFavourite`).
   - Live update across all views and in the Navbar counter.
4. **Dropdown Filter**: Filter by dietary type (`All`, `Veg`, `Non-Veg`).
5. **Cooking Time Sorting**:
   - Second dropdown to sort by cooking time (`Low → High`, `High → Low`).
   - Strictly sorts a shallow copy `[...list].sort()`, never mutating the state array.
6. **Details Page**:
   - Shows all recipe details, dynamic routing via `/:id` with `useParams()`.
   - Uses `find()` to retrieve the recipe.
   - Shows the text `"N ingredients"` and the ingredients list rendered using `map()`.
7. **Home Page**:
   - Displays application title, intro, and live summary counts for Total recipes, Veg recipes, and Favourite recipes.
8. **Favourites Page**:
   - Displays all marked favourite recipes using the reusable `RecipeCard`.
   - Calculates and displays the total cooking time for all favourite recipes.
   - Displays `"No favourites yet"` when no recipes are favourited.
9. **State Persistence During Navigation**:
   - Main application state is maintained in `App.jsx` using `useState`.
   - Navigation uses React Router's `<Link>`, preserving state across routes without resetting.
10. **Zero Forbidden Libraries**:
    - No Context API, Redux, UI frameworks (MUI, Chakra, etc.), or CSS frameworks (Tailwind, Bootstrap). Pure functional React + clean CSS.

---

## Project Structure
```
src/
├── data/
│   └── recipes.js
├── components/
│   ├── Navbar.jsx
│   └── RecipeCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx (RecipeList)
│   ├── RecipeList.jsx
│   ├── RecipeDetails.jsx
│   └── Favourites.jsx
├── App.jsx
├── main.jsx
├── index.css
```

---

## Git Submission Instructions
To push to your public GitHub repository named `yourname-midsem-phase2`:
```bash
git init
git add .
git commit -m "Complete P3 Recipe Book assignment"
git branch -M main
git remote add origin https://github.com/<your-username>/yourname-midsem-phase2.git
git push -u origin main
```
*(Note: `node_modules` is excluded via `.gitignore`)*
