import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";

const rootReducer = {
  theme: themeReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
