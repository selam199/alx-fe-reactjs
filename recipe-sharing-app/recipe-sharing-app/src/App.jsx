import AddRecipeForm from'./components/AddRecipeForm';
import RecipeList from'./components/RecipeList';

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;

