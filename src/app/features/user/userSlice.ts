import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string; 
  firstName: string;
  lastName: string;
  password: string
}

interface UserState {
  user: User[] | Object;
  editUser: User[] | Object
}

const initialState: UserState = {
  user: [],
  editUser: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Assuming signUp adds a single user
    },
    clear: (state) => {
      state.user = [];
    },
    editInfo: (state, action: PayloadAction<User>) => {
      state.editUser = action.payload; // Assuming editInfo replaces the current editUser
    },
    logIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Assuming signUp adds a single user
    },
  },
});

export const { signUp, clear, editInfo, logIn } = userSlice.actions;

export default userSlice.reducer;
