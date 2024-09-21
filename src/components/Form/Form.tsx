import React, { useEffect } from "react";
import {Header} from "./Header.tsx";
import {FirstName} from "./FirstName.tsx";
import {LastName} from "./LastName.tsx";
import {Email} from "./Email.tsx";
import {Password} from "./Password.tsx";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../app/features/user/userSlice.ts";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Form: React.FC = () => {  
  const navigate = useNavigate()
  const loginError = useSelector((state: any) => state.user.error);
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

const handleSignUp = async (data: FormData) => {
  const credentials = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
  };
  await dispatch(signUp(credentials));
};
 const onSubmit: SubmitHandler<FormData> = (data: any) =>  handleSignUp(data);

 useEffect(()=>{
  localStorage.setItem('token', '');
 },[])
  useEffect(() => {
    if (user && user.token) {
      setTimeout(()=>{
        navigate('/dashboard');
      },1000)
    }
  }, [user, navigate]);
  useEffect(() => {
    if (!!loginError) {
     alert('User Already Exists')
    }
  }, [loginError]);
  return (
    <div className="container mt-12 md:mt-24 mx-auto md:px-20 px-5">
      <Header />
      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-6/12 pb-10 xl:w-4/12 w-full grid grid-cols-2 p-2"
          autoComplete="off"
        >
          <FirstName register={register} errors={errors} />
          <LastName register={register} errors={errors} />
          <Email register={register} errors={errors} />
          <Password register={register} errors={errors} />
          <button
            type="reset"
            onClick={() => reset()}
            className="bg-gray-500 text-white py-3 mr-4 mt-4 rounded-2xl opacity-40 transition-opacity hover:opacity-100"
          >
            Clear all
          </button>
          <button
            type="submit"
            className="bg-fblue-100 text-white opacity-70 transition-all shadow-sm shadow-transparent hover:shadow-blue-500 hover:opacity-100 py-3 rounded-2xl ml-4 mt-4"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};
