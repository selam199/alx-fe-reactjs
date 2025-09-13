// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes());

  if (recipes.length === 0) return <p>No recipes match your search.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div className="border p-4 rounded mb-2 hover:bg-gray-100 cursor-pointer">
            <h3 className="font-bold text-lg">{recipe.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;

