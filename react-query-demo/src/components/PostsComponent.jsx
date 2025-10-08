import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch posts function
const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });

  if (isLoading) return <p className="text-center mt-4">Loading posts...</p>;
  if (isError) return <p className="text-center mt-4 text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
