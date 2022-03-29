import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loading } from './global_reducer';

interface PokemonState {
  data: Array<any>;
  detail: Object;
}

export const initialState: PokemonState = {
  data: [],
  detail: {}
};

// export const PokemonReducer = (
//   state: typeof initialState = initialState,
//   action: ActionTypes
// ) => {
//   switch (action.type) {
//     case GETALLPOKEMON:
//       return { ...state, data: action.payload };

//     case GETDETAILPOKEMON:
//       return { ...state, detail: action.payload };

//     default:
//       return state;
//   }
// };

export const getAllPokemonApi = createAsyncThunk(
  'pokemons/getAllPokemon',
  async (limit: number, { dispatch }) => {
    try {
      dispatch(loading(true));
      const data = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      ).json();

      let res = [];

      for await (const iterator of data.results) {
        let result = await (await fetch(iterator.url)).json();
        res.push(result);
      }

      console.log(res, 'process fetch from api');

      return res;
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(loading(false));
    }
  }
);

export const getDetailPokemonApi = createAsyncThunk(
  'pokemon/getDetailPokemon',
  async (url: string, { dispatch }) => {
    try {
      dispatch(loading(true));
      const data = await (await fetch(url)).json();

      console.log(data, 'process fetch from api');

      const uniq = Array.from(
        new Set(
          data?.flavor_text_entries.map((item: any) =>
            item.language.name === 'en' ? item.flavor_text : ''
          )
        )
      );

      data.flavor_text_entries = uniq;

      return data;
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(loading(false));
    }
  }
);

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllPokemonApi.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.data = [...state.data, ...action.payload];
      }
    );
    builder.addCase(
      getDetailPokemonApi.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.detail = { ...state.detail, ...action.payload };
      }
    );
  }
});
