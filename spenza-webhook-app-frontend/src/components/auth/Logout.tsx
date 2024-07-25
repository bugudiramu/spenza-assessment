import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
