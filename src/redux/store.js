import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import searchReducer from "./search.slice";
import fetchReducer from "./show.slice";
import favoriteReducer from "./favorite.slice";

const rootReducer = combineReducers({
  theme: themeReducer,
  search: searchReducer,
  fetch: fetchReducer,
  favorite: favoriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
