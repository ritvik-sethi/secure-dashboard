import React from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./Routes/AppRoutes.tsx";
import { Nav } from "./components/Nav/Nav.tsx";


const App: React.FC = () => {
  const mode = useSelector((state: any) => state.mode.mode);

  return (
    <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat">
      <div data-testid="mode-div" className={`${mode ? "dark" : "light"} bg-gradient h-full relative`}>
        <Nav />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
