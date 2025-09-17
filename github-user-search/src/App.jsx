import { useState } from "react";
import { fetchUserData, searchUsers } from "./services/githubService";
import SearchBar from "./components/Search";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);       // for single user
  const [users, setUsers] = useState([]);       // for advanced search results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle single username search
  const handleSingleUserSearch = async (username) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchUserData(username);
      setUser(data);
      setUsers([]); // clear previous search results
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle advanced search with filters
  const handleAdvancedSearch = async ({ query, location, minRepos, page }) => {
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers({ query, location, minRepos, page });
      setUsers(data.items);
      setUser(null); // clear previous single user
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>

      {/* SearchBar component should call either of these handlers */}
      <SearchBar 
        onSingleUserSearch={handleSingleUserSearch} 
        onAdvancedSearch={handleAdvancedSearch} 
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Single user result */}
      {user && <UserCard user={user} />}

      {/* Advanced search results */}
      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
