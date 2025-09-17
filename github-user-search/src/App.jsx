import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import SearchBar from "./components/Search";


function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">GitHub User Search</h1>
      <SearchBar />
     
    </div>
  );
}

export default App;

