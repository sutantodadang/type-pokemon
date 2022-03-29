export const LOGIN: string = 'LOGIN';
export const REGISTER: string = 'REGISTER';

export const GETALLPOKEMON: string = 'GETALLPOKEMON';
export const GETDETAILPOKEMON: string = 'GETDETAILPOKEMON';

export const LOADING: string = 'LOADING';
export const SETCOLOR = 'SETCOLOR';

export type ActionTypes =
  | { type: typeof LOGIN; payload: any }
  | { type: typeof REGISTER; payload: any }
  | { type: typeof GETALLPOKEMON; payload: any }
  | { type: typeof LOADING; payload: any }
  | { type: typeof GETDETAILPOKEMON; payload: any }
  | { type: typeof SETCOLOR; payload: any };

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

export const GetDetailPokemon = (payload: any): ActionTypes => ({
  type: GETDETAILPOKEMON,
  payload
});

export const LoadingGlobal = (payload: any): ActionTypes => ({
  type: LOADING,
  payload
});

export const SetColor = (payload: any): ActionTypes => ({
  type: SETCOLOR,
  payload
});
