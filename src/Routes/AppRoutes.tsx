// src/Routes.tsx
import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { LoginForm } from "../components/Form/LoginForm.tsx";
import { Form } from "../components/Form/Form.tsx";
import { Welcome } from "../components/Welcome/Welcome.tsx";
import ProtectedRouteMiddleware from "./middlewareUtility.tsx";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Form />} />
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRouteMiddleware>
            <Welcome />
          </ProtectedRouteMiddleware>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
