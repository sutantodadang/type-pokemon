import { createStore, applyMiddleware, combineReducers } from 'redux';
import { AuthReducer } from './reducer/auth_reducer';
import { PokemonReducer } from './reducer/pokemon_reducer';

import logger from 'redux-logger';

const AllReducer = combineReducers({
  auth: AuthReducer,
  poke: PokemonReducer
});

export const MyStore = createStore(AllReducer, applyMiddleware(logger));
