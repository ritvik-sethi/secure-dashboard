import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteMiddleware: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  return !!token ? children : <Navigate to="/" />;
};

export default ProtectedRouteMiddleware;
