import { ActionTypes, GETALLPOKEMON } from '../actions';

export const initialState = {
  data: []
};

export const PokemonReducer = (
  state: typeof initialState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case GETALLPOKEMON:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
