import { AuthSlice } from './reducer/auth_reducer';
import { PokemonSlice } from './reducer/pokemon_reducer';
import { GlobalSlice } from './reducer/global_reducer';

import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

// const AllReducer = combineReducers({
//   auth: AuthReducer,
//   poke: PokemonReducer,
//   globalState: GlobalReducer
// });

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    poke: PokemonSlice.reducer,
    glob: GlobalSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;

// export const MyStore = createStore(AllReducer, applyMiddleware(logger));
