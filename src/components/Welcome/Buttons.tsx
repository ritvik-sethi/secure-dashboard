import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, editInfo } from "../../app/features/user/userSlice.ts";
import { RootState } from "../../app/store"; // Adjust this path based on your project structure

export const Buttons: React.FC = () => {
  // redux
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user); // Typed selector

  // edit info event
  const handleEditInfo = (latestInfo: any) => { // Replace `any` with your actual user type
    dispatch(editInfo(latestInfo));
    dispatch(clear());
  };

  return (
    <div className="w-full pb-10 flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12">
      <button onClick={() => dispatch(clear())} className="logOut__btn">
        Log out
      </button>
      <button onClick={() => handleEditInfo(user)} className="editInfo__btn">
        Edit Info
      </button>
    </div>
  );
};

