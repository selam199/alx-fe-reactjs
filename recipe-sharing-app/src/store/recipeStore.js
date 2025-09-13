import { create } from 'zustand';

const initialRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');

const useRecipeStore = create((set, get) => ({
  recipes: initialRecipes,

  // CRUD
  addRecipe: (newRecipe) => {
    set((state) => {
      const recipes = [...state.recipes, newRecipe];
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const recipes = state.recipes.map((r) =>
        String(r.id) === String(updatedRecipe.id) ? updatedRecipe : r
      );
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const recipes = state.recipes.filter((r) => String(r.id) !== String(id));
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
  },

  // helper to get recipe by id (string or number)
  getRecipeById: (id) => {
    const recipes = get().recipes;
    return recipes.find((r) => String(r.id) === String(id));
  },
}));

export default useRecipeStore;
