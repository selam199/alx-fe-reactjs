import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

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
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar />
     
    </div>
  );
}

export default App;

