import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PASSWORD } from "../../constants.ts";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface PasswordProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const Password: React.FC<PasswordProps> = ({ register, errors }) => {
  const [states, setStates] = useState<{ show: boolean; active: boolean }>({
    show: false,
    active: false,
  });

  const errColor = !errors.password
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";

  return (
    <div
      onFocus={() => setStates((prev) => ({ ...prev, active: true }))}
      onBlur={() => setStates((prev) => ({ ...prev, active: false }))}
      className={`form__inputs col-span-2 ${
        states.active ? "input__active" : ""
      }`}
    >
      <label htmlFor="password">
        <span>{PASSWORD}</span>
        <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
          {errors.password && "*" + errors.password.message}
        </small>
        {states.show ? (
          <EyeOffIcon
            onClick={() => setStates((prev) => ({ ...prev, show: false }))}
            className={`cursor-pointer h-6 w-6 absolute right-4 ${errColor}`}
          />
        ) : (
          <EyeIcon
            onClick={() => setStates((prev) => ({ ...prev, show: true }))}
            className={`cursor-pointer h-6 w-6 absolute right-4 ${errColor}`}
          />
        )}
      </label>
      <input
        {...register("password", {
          required: "required",
          minLength: { value: 9, message: "Minimum 9 characters" },
        })}
        type={states.show ? "text" : "password"}
        id="password"
      />
    </div>
  );
};
