import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/mode/modeSlice.ts";
import userReducer from "./features/user/userSlice.ts";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    user: userReducer,
  },
});

// Define RootState type for use in selectors and hooks
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for use in dispatching actions
export type AppDispatch = typeof store.dispatch;