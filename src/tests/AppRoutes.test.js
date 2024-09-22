import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "../Routes/AppRoutes.tsx";
import userReducer from "../app/features/user/userSlice.ts";
import { configureStore } from "@reduxjs/toolkit";

const createTestStore = () => {
  return configureStore({
    reducer: { user: userReducer },
  });
};

describe("AppRoutes", () => {
  it("should navigate to /signup on initial load", () => {
    render(
      <Provider store={createTestStore()}>
        <MemoryRouter initialEntries={["/"]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/create an account/i)).toBeInTheDocument();
  });

  it("should render the LoginForm on /login route", () => {
    render(
      <Provider store={createTestStore()}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Not a member/i)).toBeInTheDocument();
  });

  it("should render the Form on /signup route", () => {
    render(
      <Provider store={createTestStore()}>
        <MemoryRouter initialEntries={["/signup"]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Create account/i)).toBeInTheDocument();
  });

  it("should render the Welcome component on /dashboard route if authorized", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn().mockImplementation((key) => {
          if (key === "token") {
            return "abc";
          }
          return null;
        }),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });

    render(
      <Provider store={createTestStore()}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
