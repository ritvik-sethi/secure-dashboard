import React from "react";
import {Picture} from "./Picture.tsx";
import {Buttons} from "./Buttons.tsx";

export const Welcome: React.FC = () => {
  return (
    <div className="w-fit mx-auto h-fit flex flex-col items-center">
      <Picture />
      <Buttons />
    </div>
  );
};


