import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  token?: string;
}

interface UserState {
  user: User | null; 
  editUser: User | null;
  loading: boolean;
  loginError: string | null;
  signupError: string | null;
}

const initialState: UserState = {
  user: null,
  editUser: null,
  loading: false,
  loginError: null,
  signupError:null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpRequest: (state) => {
      state.loading = true;
      state.signupError = null;
    },
    signUpSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.signupError = action.payload;
    },
    clear: (state) => {
      state.user = null;
    },
    editInfo: (state, action: PayloadAction<User>) => {
      state.editUser = action.payload;
    },
    logInRequest: (state) => {
      state.loading = true;
      state.loginError = null;
    },
    logInSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    logInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.loginError = action.payload;
    },
    clearErrors: (state) =>{
      state.loginError = null;
      state.signupError = null;
    }
  },
});

export const {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  clear,
  editInfo,
  logInRequest,
  logInSuccess,
  logInFailure,
  clearErrors
} = userSlice.actions;

export default userSlice.reducer;

// Sign Up Function with Axios
export const signUp = (userData: Partial<User>) => (dispatch: any) => {
  dispatch(signUpRequest());
  axios
    .post("http://localhost:5000/signup", userData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(signUpSuccess({
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        token: response.data.token,
      }));
    })
    .catch((error) => {
      dispatch(signUpFailure(error.response?.data?.error || "Signup failed"));
    });
};

// Log In Function with Axios
export const logIn = (credentials: { email: string; password: string }) => (dispatch: any) => {
  dispatch(logInRequest());
  axios
    .post("http://localhost:5000/login", credentials)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(logInSuccess({
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        token: response.data.token,
      }));
    })
    .catch((error) => {
      dispatch(logInFailure(error.response?.data?.error || "Login failed"));
    });
};
