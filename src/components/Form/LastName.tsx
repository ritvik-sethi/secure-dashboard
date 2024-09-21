import React, { useState } from "react";
//@ts-ignore
import { UserIcon } from "@heroicons/react/solid";
import { FieldErrors, UseFormRegister } from "react-hook-form";

// Define a type for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LastNameProps {
  register: UseFormRegister<FormData>; // Specify the correct form data type
  errors: FieldErrors<FormData>;
}

export const LastName: React.FC<LastNameProps> = ({ register, errors }) => {
  // Active style state
  const [active, setActive] = useState(false);

  // Error color for lastName
  const errColor = !errors.lastName
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";

  return (
    <div
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`form__inputs ml-1 ${active ? "input__active" : ""}`}
    >
      <label htmlFor="lastName">
        <span>Last name</span>
        <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
          {errors.lastName && "*" + errors.lastName.message}
        </small>
        <UserIcon className={`h-6 w-6 absolute right-3 ${errColor}`} />
      </label>
      <input
        {...register("lastName", { 
          required: "Last Name is required", 
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Only alphabetic characters"
          }
        })}
        type="text"
        id="lastName"
      />
    </div>
  );
};

