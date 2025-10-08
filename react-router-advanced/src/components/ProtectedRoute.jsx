import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js"; // import the hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // use the hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
