import { create } from "zustand";

// Safe localStorage loader
const loadFromStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

// Initial states
const initialRecipes = loadFromStorage("recipes", []);
const initialFavorites = loadFromStorage("favorites", []);

const useRecipeStore = create((set, get) => ({
  recipes: initialRecipes,
  favorites: initialFavorites,
  recommendations: [],

  // =====================
  // CRUD
  // =====================
  addRecipe: (newRecipe) => {
    set((state) => {
      const recipes = [...state.recipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(recipes));
      return { recipes };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const recipes = state.recipes.map((r) =>
        String(r.id) === String(updatedRecipe.id) ? updatedRecipe : r
      );
      localStorage.setItem("recipes", JSON.stringify(recipes));
      return { recipes };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const recipes = state.recipes.filter((r) => String(r.id) !== String(id));
      localStorage.setItem("recipes", JSON.stringify(recipes));
      return { recipes };
    });
  },

  // =====================
  // Favorites
  // =====================
  addFavorite: (recipeId) => {
    set((state) => {
      if (state.favorites.includes(recipeId)) return state; // avoid duplicates
      const favorites = [...state.favorites, recipeId];
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { favorites };
    });
  },

  removeFavorite: (recipeId) => {
    set((state) => {
      const favorites = state.favorites.filter((id) => id !== recipeId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { favorites };
    });
  },

  // =====================
  // Recommendations (basic version)
  // =====================
  generateRecommendations: () => {
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && // exclude favorites
          Math.random() > 0.5 // mock randomness for now
      );
      return { recommendations: recommended };
    });
  },

  // =====================
  // Helpers
  // =====================
  getRecipeById: (id) => {
    const recipes = get().recipes;
    return recipes.find((r) => String(r.id) === String(id));
  },
}));

export default useRecipeStore;
