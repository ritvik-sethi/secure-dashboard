import React from "react";
import { Profile } from "./Profile.tsx";
import { Tabs } from "./Tabs.tsx";

export const Nav: React.FC = () => {
  return (
    <div className="container mx-auto md:px-20 px-5">
      <div className="flex items-center">
        <Profile />
        <Tabs />
      </div>
    </div>
  );
};
