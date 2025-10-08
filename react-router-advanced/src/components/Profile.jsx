import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div className="p-4 border rounded">
    <h2>Profile Page</h2>
    <nav className="space-x-4">
      <Link to="details">Details</Link>
      <Link to="settings">Settings</Link>
    </nav>
    {/* Nested route content */}
    <Outlet />
  </div>
);

export default Profile;
