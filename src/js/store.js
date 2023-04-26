import { createStore } from "redux";

import { rootreducers } from "./reducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootreducers /* preloadedState, */, devtools);
