import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return isLoggedIn ? (
    <div
      style={{
        margin: "2rem",
      }}
    >
      {element}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
