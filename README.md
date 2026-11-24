# Recipe Book

## Student Information
- **Student Name:** Gautam Kumar
- **Roll Number:** 2502201530033
- **Assigned Problem Statement:** P3 — Recipe Book

---

## Instructions to Install & Run

1. Install dependencies:
```bash
npm install
```

2. Run the application:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

---

## Application Overview

This project is a React-based Recipe Book web application created for the Web 301 Advance Frontend Engineering Midsem Exam.

### Key Features:
- **Home (`/`):** Summary statistics including total recipes, vegetarian recipes, and saved favourite recipes.
- **Recipes List (`/recipes`):** Search and filter by dietary type (Veg / Non-Veg) and sort recipes by cooking time.
- **Recipe Details (`/recipes/:id`):** View complete recipe information, cooking time, difficulty, and ingredient list.
- **Favourites (`/favourites`):** View saved favourite recipes along with total cooking time calculation.
- **State Management:** Preserves state during navigation between pages using React Router.
