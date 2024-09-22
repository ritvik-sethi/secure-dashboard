import React from "react";
import { useSelector } from "react-redux";
import { ONLINE, WELCOME } from "../../constants.ts";

export const UserInfo: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  return (
    <div className="md:mt-12 mt-5 h-fit flex flex-col">
      <h1 className="text-center dark:text-gray-400 text-gray-600 text-2xl font-bold">
        {WELCOME}
      </h1>
      <div className="md:mt-16 mt-7 flex flex-col md:flex-row items-center">
        <div>
          <div className="flex flex-col md:items-start items-center">
            <h3 className="md:text-3xl text-xl font-bold dark:text-white">
              {user?.firstName} {user?.lastName}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {user?.email}
            </span>
            <span className="text-green-600 text-base md:text-lg font-semibold">
              {ONLINE}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
