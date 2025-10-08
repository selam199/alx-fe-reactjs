import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("authenticated", "true");
    navigate("/profile/details");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
