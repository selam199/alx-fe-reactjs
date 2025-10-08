import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-4">
    <h1>Home Page</h1>
    <nav className="space-x-4">
      <Link to="/profile/details">Profile Details</Link>
      <Link to="/profile/settings">Profile Settings</Link>
      <Link to="/post/123">Post 123</Link>
    </nav>
  </div>
);

export default Home;
