import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from URL
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full md:w-1/2 rounded-lg mb-4 mx-auto"
      />
      <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
