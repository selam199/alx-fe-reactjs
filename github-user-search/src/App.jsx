import { useState } from "react";
import { searchUsers } from "./services/githubService";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await searchUsers(username);
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;

