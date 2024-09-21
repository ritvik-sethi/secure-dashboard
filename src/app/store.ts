import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/mode/modeSlice.ts";
import userReducer from "./features/user/userSlice.ts";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;