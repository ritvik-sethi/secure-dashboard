import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App.tsx";

// Mock the Nav component
jest.mock("./components/Nav/Nav.tsx", () => ({
  Nav: () => <div data-testid="nav">Nav Component</div>,
}));

// Mock the AppRoutes component
jest.mock("./Routes/AppRoutes.tsx", () => () => <div data-testid="app-routes">AppRoutes Component</div>);

const mockStore = configureStore([]);

describe("App Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mode: {
        mode: false, // Change to true to test dark mode
      },
    });
  });

  test("renders with light mode", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const modeDiv = getByTestId("mode-div");
    expect(modeDiv).toHaveClass("light");
    expect(modeDiv).toHaveClass("bg-gradient");
  });

  test("renders with dark mode", () => {
    store = mockStore({
      mode: {
        mode: true,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const modeDiv = getByTestId("mode-div");
    expect(modeDiv).toHaveClass("dark");
  });

  test("renders Nav and AppRoutes components", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByTestId("nav")).toBeInTheDocument();
    expect(getByTestId("app-routes")).toBeInTheDocument();
  });
});
