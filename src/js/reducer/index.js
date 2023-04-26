import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { productReducer } from "./productReducer";
export const rootreducers = combineReducers({
  mv: movieReducer,
  pd: productReducer,
});
