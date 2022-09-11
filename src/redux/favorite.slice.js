import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  number: 0,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
      state.number = state.favorites ? state.favorites.length : 0;
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter((user) => user.id !== action.payload.id);
      state.number = state.favorites ? state.favorites.length : 0;
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
