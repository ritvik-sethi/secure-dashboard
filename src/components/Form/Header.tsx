import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ALREADY_A_MEMBER,
  CREATE_AN_ACCOUNT,
  LOGIN,
  LOGIN_TO_ACCOUNT,
  NOT_A_MEMBER,
  SIGNUP,
} from "../../constants.ts";

export const Header: React.FC = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const handleLoginClick = () => {
    Navigate("/login");
  };
  const handleSignUpClick = () => {
    Navigate("/signup");
  };
  return (
    <div>
      <div className="text-center md:text-left">
        <h1 className="text-5xl text-gray-800 dark:text-gray-200 font-bold py-3">
          <span>
            {location.pathname === "/login"
              ? LOGIN_TO_ACCOUNT
              : CREATE_AN_ACCOUNT}
          </span>
          <span className="text-fblue-100 text-5xl">.</span>
        </h1>
        {location.pathname === "/login" ? (
          <span className="font-bold text-3xl text-gray-700 dark:text-gray-300">
            <span>
              {NOT_A_MEMBER}
              <button
                className="text-fblue-100 cursor-pointer pl-2 hover:underline"
                onClick={() => handleSignUpClick()}
              >
                {SIGNUP}
              </button>
            </span>
          </span>
        ) : (
          <span className="font-bold text-3xl text-gray-700 dark:text-gray-300">
            <span>
              {ALREADY_A_MEMBER}
              <button
                className="text-fblue-100 cursor-pointer pl-2 hover:underline"
                onClick={() => handleLoginClick()}
              >
                {LOGIN}
              </button>
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
