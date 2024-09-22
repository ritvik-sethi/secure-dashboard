import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
  mode: boolean;
}

const initialState: ModeState = {
  mode: true,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state: ModeState) => {
      state.mode = !state.mode;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
