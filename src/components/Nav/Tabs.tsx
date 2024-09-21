import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice.ts";
//@ts-ignore
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { RootState } from "../../app/store"; // Adjust based on your store's path

export const Tabs: React.FC = () => {
  // redux
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode); // Typed selector

  return (
    <div className="flex-1 text-gray-500 dark:text-gray-400 font-semibold text-sm">
      <span className="cursor-pointer px-5">
        <a
          href="https://webreinvent.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="About WebReInvent website"
        >
          About
        </a>
      </span>
      <span className="cursor-pointer px-5 md:inline hidden">
        <a
          href="https://www.linkedin.com/in/ritvik-sethi-725600188/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact me"
        >
          Contact Me
        </a>
      </span>
      <span
        title="Change Mode"
        onClick={() => dispatch(changeMode())}
        className="cursor-pointer md:px-5"
      >
        {mode ? (
          <SunIcon className="w-6 inline" />
        ) : (
          <MoonIcon className="w-6 inline" />
        )}
      </span>
    </div>
  );
};
