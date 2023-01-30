import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navbarReducer from "../features/header/navbar/navbarSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  navbar: navbarReducer,
});
