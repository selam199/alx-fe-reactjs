import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // Added steps state
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n").map((s) => s.trim()), // Split steps by new line
    };

    onAddRecipe(newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-2 font-semibold">Recipe Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2 font-semibold">Ingredients (comma separated)</label>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        rows="3"
      />

      <label className="block mb-2 font-semibold">Preparation Steps (one per line)</label>
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        rows="5"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
