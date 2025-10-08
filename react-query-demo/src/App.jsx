import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent.jsx";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your app with QueryClientProvider and pass the client
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-center text-3xl font-bold mt-8">
          React Query Demo
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
