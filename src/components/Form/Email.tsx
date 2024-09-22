import React, { useState } from "react";
import { AtSymbolIcon } from "@heroicons/react/solid";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EMAIL } from "../../constants.ts";

interface EmailProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export const Email: React.FC<EmailProps> = ({ register, errors }) => {
  const [active, setActive] = useState(false);
  const errColor = !errors.email
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";

  return (
    <div
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`form__inputs col-span-2 my-4 ${
        active ? "input__active" : ""
      }`}
    >
      <label htmlFor="email">
        <span>{EMAIL}</span>
        <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
          {errors.email && "*" + errors.email.message}
        </small>
        <AtSymbolIcon className={`h-6 w-6 absolute right-4 ${errColor}`} />
      </label>
      <input
        {...register("email", { required: "required" })}
        type="email"
        id="email"
      />
    </div>
  );
};
