import axios from "axios";

const BASE_URL = "https://api.github.com";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY || "";

// Fetch a single user by exact username
export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: { Authorization: `token ${TOKEN}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced search with username, location, minRepos, and pagination
export const searchUsers = async ({ query, location = "", minRepos = 0, page = 1 }) => {
  if (!query) throw new Error("Search query is required");

  let searchQuery = query;
  if (location) searchQuery += `+location:${location}`;
  if (minRepos) searchQuery += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchQuery}&page=${page}&per_page=20`,
      {
        headers: { Authorization: `token ${TOKEN}` },
      }
    );

    return response.data; // { total_count, incomplete_results, items }
  } catch (error) {
    throw new Error("Search failed");
  }
};

