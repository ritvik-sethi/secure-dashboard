// src/__tests__/userSlice.test.ts
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer, { signUp, logIn, signUpRequest, signUpSuccess, signUpFailure, logInRequest, logInSuccess, logInFailure } from '../app/features/user/userSlice.ts';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const createTestStore = () => {
  return configureStore({
    reducer: { user: userReducer }
  });
};

describe('User Slice', () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
  });

  it('should handle initial state', () => {
    const state = store.getState().user;
    expect(state).toEqual({
      user: null,
      editUser: null,
      loading: false,
      loginError: null,
      signupError: null
    });
  });

  it('should handle signUpRequest', () => {
    store.dispatch(signUpRequest());
    const state = store.getState().user;
    expect(state.loading).toBe(true);
    expect(state.signupError).toBe(null);
  });

  it('should handle signUpSuccess', () => {
    const user = { email: 'test@example.com', firstName: 'Test', lastName: 'User', token: 'fake-token' };
    store.dispatch(signUpSuccess(user));
    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.user).toEqual(user);
  });

  it('should handle signUpFailure', () => {
    store.dispatch(signUpFailure('Signup failed'));
    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.signupError).toBe('Signup failed');
  });

  it('should handle logInRequest', () => {
    store.dispatch(logInRequest());
    const state = store.getState().user;
    expect(state.loading).toBe(true);
    expect(state.loginError).toBe(null);
  });

  it('should handle logInSuccess', () => {
    const user = { email: 'test@example.com', firstName: 'Test', lastName: 'User', token: 'fake-token' };
    store.dispatch(logInSuccess(user));
    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.user).toEqual(user);
  });

  it('should handle logInFailure', () => {
    store.dispatch(logInFailure('Login failed'));
    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.loginError).toBe('Login failed');
  });
});


describe('Async Actions', () => {
  let mock
  let store;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    store = createTestStore();
  });

  afterEach(() => {
    mock.restore();
  });

  it('should dispatch signUp actions on successful signup', async () => {
    const userData = { email: 'test@example.com', password: 'password' };
    const response = { email: 'test@example.com', firstName: 'Test', lastName: 'User', token: 'fake-token' };
    const state = store.getState().user;
    await mock.onPost('http://localhost:5000/signup').reply(200, response);
    store.dispatch(signUp(userData));
    expect(state.loading).toBe(false);
    expect(state.signupError).toBe(null);
  });
  it('should dispatch logIn actions on successful login', async () => {
    const credentials = { email: 'test@example.com', password: 'password' };
    const response = { email: 'test@example.com', firstName: 'Test', lastName: 'User', token: 'fake-token' };
    const state = store.getState().user;

    await mock.onPost('http://localhost:5000/login').reply(200, response);
    store.dispatch(logIn(credentials));
    expect(state.loading).toBe(false);
    expect(state.loginError).toBe(null);
  });
});
