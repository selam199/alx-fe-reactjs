import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // MUST exist

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) return;

    onAddRecipe({
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      steps: steps.split("\n").map(s => s.trim()), // MUST match "steps"
    });

    setTitle("");
    setIngredients("");
    setSteps(""); // Reset
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients"
      ></textarea>
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps"
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
