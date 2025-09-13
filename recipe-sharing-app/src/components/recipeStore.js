// src/store/useRecipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
  
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),

    setSearchTerm: (term) => {
    set({ searchTerm: term });
  },

  // Computed: filtered recipes based on search term
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
    })),
  
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
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
