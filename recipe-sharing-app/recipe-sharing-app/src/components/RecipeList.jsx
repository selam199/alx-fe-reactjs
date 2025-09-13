import useRecipeStore from '../store/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded mb-2">
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
