import React from "react";
//@ts-ignore
import { UserInfo } from "./UserInfo.tsx";
import { LogoutButton } from "./LogoutButton.tsx";

export const Welcome: React.FC = () => {
  return (
    <div className="w-fit mx-auto h-fit flex flex-col items-center">
      <UserInfo />
      <LogoutButton />
    </div>
  );
};
