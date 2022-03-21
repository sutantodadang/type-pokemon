export const LOGIN: string = 'LOGIN';
export const REGISTER: string = 'REGISTER';

export const GETALLPOKEMON: string = 'GETALLPOKEMON';

export type ActionTypes =
  | { type: typeof LOGIN; payload: any }
  | { type: typeof REGISTER; payload: any }
  | { type: typeof GETALLPOKEMON; payload: any };

export const LoginAction = (payload: any): ActionTypes => ({
  type: LOGIN,
  payload
});

export const RegisterAction = (payload: any): ActionTypes => ({
  type: REGISTER,
  payload
});

export const GetAllPokemon = (payload: any): ActionTypes => ({
  type: GETALLPOKEMON,
  payload
});
