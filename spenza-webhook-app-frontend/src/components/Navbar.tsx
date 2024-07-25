import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/">Real-Time Log</Link>
            </li>
            <li>
              <Link to="/subscribe">Subscribe</Link>
            </li>
            <li>
              <Link to="/webhook">Webhooks</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li className="username">
              <Link to="/">Welcome {localStorage.getItem("username")}</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
