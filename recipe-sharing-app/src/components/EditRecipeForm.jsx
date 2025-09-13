import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 rounded w-full mb-1"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-1 rounded w-full mb-1"
      />
      <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded">
        Save
      </button>
    </form>
  );
};

export default EditRecipeForm;
