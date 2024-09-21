import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Nav } from "./components/Nav/Nav.tsx";
import { Form } from "./components/Form/Form.tsx";
import { Welcome } from "./components/Welcome/Welcome.tsx";
import { useSelector } from "react-redux";
import { LoginForm } from "./components/Form/LoginForm.tsx";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const user = useSelector((state: any) => state.user.user);
  return user.length > 0 ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  const mode = useSelector((state: any) => state.mode.mode);

  return (
      <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat">
        <div className={`${mode ? "dark" : "light"} bg-gradient h-full relative`}>
          <Nav />
          <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/login" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              }
            />
          </Routes>
          <div
            className={`absolute right-10 top-1/2 transform -translate-y-1/2 text-transparent text-6xl font-extrabold bg-clip-text 
              bg-gradient-to-r from-blue-900 to-blue-500 dark:from-blue-500 dark:to-blue-900`}
          >
            webReInvent
          </div>
        </div>
      </div>
  );
};

export default App;
