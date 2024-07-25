import { Navigate } from "react-router-dom";

const PublicRoute = ({ element }: { element: JSX.Element }) => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return !isLoggedIn ? element : <Navigate to="/" />;
};

export default PublicRoute;
