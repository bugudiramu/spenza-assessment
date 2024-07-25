import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import RealTimeLog from "./components/RealTimeLog";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import SignUp from "./components/auth/Signup";
import Subscribe from "./components/webhook/Subscribe";
import WebhookDetails from "./components/webhook/WebhookDetails";
import WebhookList from "./components/webhook/WebhookList";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route
            path="/signup"
            element={<PublicRoute element={<SignUp />} />}
          />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route
            path="/subscribe"
            element={<PrivateRoute element={<Subscribe />} />}
          />
          <Route
            path="/webhook"
            element={<PrivateRoute element={<WebhookList />} />}
          />
          <Route
            path="/webhook/:id"
            element={<PrivateRoute element={<WebhookDetails />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute element={<RealTimeLog />} />}
          />
          <Route
            path="/logout"
            element={<PrivateRoute element={<Logout />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
