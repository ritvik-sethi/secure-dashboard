import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { HEY, PLEASE_LOGIN, PLEASE_SIGNUP } from "../../constants.ts";

export const Profile: React.FC = () => {
  const user = useSelector((state: any) => state?.user?.user);
  const location = useLocation();
  return (
    <div className="my-3 flex items-center w-fit">
      <div className="bg-fblue-100 rounded-full w-8 h-8 mr-2"></div>
      <span className="dark:text-white md:pr-16 font-semibold">
        {location.pathname !== "/dashboard"
          ? location.pathname === "/login"
            ? PLEASE_LOGIN
            : PLEASE_SIGNUP
          : `${HEY} ${user?.firstName} !`}
      </span>
    </div>
  );
};
