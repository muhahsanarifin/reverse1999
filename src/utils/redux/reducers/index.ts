import { combineReducers } from "@reduxjs/toolkit";
import charactersSlice from "./characters";

export default combineReducers({
  characters: charactersSlice,
});
