import modeReducer, { changeMode } from "../app/features/mode/modeSlice"; 

describe("Mode Slice", () => {
  const initialState = { mode: true };

  it("should return the initial state", () => {
    const state = modeReducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should toggle the mode", () => {
    let state = modeReducer(initialState, changeMode());
    expect(state.mode).toBe(false);
    state = modeReducer(state, changeMode());
    expect(state.mode).toBe(true);
  });
});
