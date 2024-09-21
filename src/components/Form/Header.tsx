import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();
  const Navigate = useNavigate()
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
          <span>{location.pathname === "/login" ? 'Log In to Your Account ' : 'Create an Account ' }</span>
          <span className="text-fblue-100 text-5xl">.</span>
        </h1>
        {location.pathname === "/login" ? 
         <span className="font-bold text-3xl text-gray-700 dark:text-gray-300">
         <span>
           Not a member ?
           <button 
           className="text-fblue-100 cursor-pointer pl-2 hover:underline"
           onClick = {()=>handleSignUpClick()}> Sign up</button>
         </span> 
       </span> :
        <span className="font-bold text-3xl text-gray-700 dark:text-gray-300">
        <span>
          Already a member ? 
          <button 
          className="text-fblue-100 cursor-pointer pl-2 hover:underline"
          onClick = {()=>handleLoginClick()}> Log in</button>
        </span>
      </span>
}
      </div>
    </div>
  );
};
