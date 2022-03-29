import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, LOADING } from '../actions';
import { GLOBAL } from '../interfaces';

export const initialState: GLOBAL = {
  loading: false,
  color: {
    Vibrant: '',
    Muted: '',
    DarkVibrant: '',
    DarkMuted: '',
    LightVibrant: ''
  }
};

export const GlobalReducer = (
  state: typeof initialState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };

    // case SETCOLOR:
    //   return { ...state, color: action.payload };

    default:
      return state;
  }
};

export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<any>) => {
      return { ...state, loading: action.payload };
    },
    setColor: (state, action: PayloadAction<any>) => {
      return { ...state, color: action.payload };
    }
  }
});

export const { loading, setColor } = GlobalSlice.actions;
