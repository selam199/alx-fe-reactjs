import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

const Profile = () => {
  return (
    <div className="p-4 border rounded">
      <h2>Profile Page</h2>

      {/* Navigation links for nested routes */}
      <nav className="space-x-4 mb-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes declared inside Profile component */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
