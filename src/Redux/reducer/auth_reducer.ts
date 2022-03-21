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
