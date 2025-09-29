import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (ingredients.split(",").length < 2) newErrors.ingredients = "Add at least 2 ingredients separated by commas";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions,
    };

    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Recipe</h2>

      <div>
        <label className="block text-gray-700 mb-1">Recipe Title</label>
        <input
          type="text"
          className={`w-full p-2 border rounded ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-1">
          Ingredients (comma separated)
        </label>
        <textarea
          className={`w-full p-2 border rounded ${
            errors.ingredients ? "border-red-500" : "border-gray-300"
          }`}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={3}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Instructions</label>
        <textarea
          className={`w-full p-2 border rounded ${
            errors.instructions ? "border-red-500" : "border-gray-300"
          }`}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={5}
        />
        {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
