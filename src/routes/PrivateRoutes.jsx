import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log({ user, loading });
  if (loading) {
    return <span className="loading loading-spinner loading-lg" />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
