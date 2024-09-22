import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FIRST_NAME } from "../../constants.ts";

interface FirstNameProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export const FirstName: React.FC<FirstNameProps> = ({ register, errors }) => {
  const [active, setActive] = useState<boolean>(false);

  const errColor = !errors.firstName
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";

  return (
    <div className={`form__inputs mr-1 ${active ? "input__active" : ""}`}>
      <label htmlFor="firstName">
        <span>{FIRST_NAME}</span>
        <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
          {errors.firstName && "*" + errors.firstName.message}
        </small>
        <UserIcon className={`h-6 w-6 absolute right-3 ${errColor}`} />
      </label>
      <input
        {...register("firstName", {
          required: "First name is required",
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Only alphabetic characters are allowed",
          },
        })}
        type="text"
        id="firstName"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={`border-2 rounded-md p-2 ${errColor} ${
          active ? "border-blue-500" : "border-gray-300"
        }`}
      />
    </div>
  );
};
