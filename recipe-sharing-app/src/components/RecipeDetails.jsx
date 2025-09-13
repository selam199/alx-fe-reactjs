import { useParams, useLocation, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  // recipe passed through Link state (fast), otherwise try store lookup:
  const recipeFromState = location.state?.recipe;
  const recipeFromStore = useRecipeStore((s) => s.getRecipeById(id));

  const recipe = recipeFromState ?? recipeFromStore;

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>

      {/* edit and delete components */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />

      <Link to="/" className="text-blue-500 mt-4 inline-block">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;

