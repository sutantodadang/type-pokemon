import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, LOGIN, REGISTER } from '../actions';
import { User } from '../interfaces';

export const initialState: User = {
  email: 'test@mail.com',
  password: 'password',
  name: 'admin',
  isLogged: false
};

export const AuthReducer = (
  state: typeof initialState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogged: action.payload };

    case REGISTER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      return { ...state, isLogged: action.payload };
    },
    register: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { login, register } = AuthSlice.actions;
