import React from "react";
import { useDispatch } from "react-redux";
import { clear } from "../../app/features/user/userSlice.ts";
import { useNavigate } from "react-router-dom";

export const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onLogout = () =>{
    dispatch(clear())
    localStorage.setItem('token', '');
    navigate('/login')
  }

  return (
    <div className="w-full pb-10 flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12">
      <button onClick={() => onLogout()} className="logOut__btn">
        Log out
      </button>
    </div>
  );
};

