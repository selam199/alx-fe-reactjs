
import { useState, useEffect } from "react";

// Simple auth hook
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  return isAuthenticated;
};

export default useAuth;
