import { listmovie } from "../../data";
import {
  ADDMOVIE,
  GETMOVIEDETAILS,
  RESETRATE,
  SEARCHBYNAME,
  SEARCHBYRATE,
} from "../actionsTypes/movieActions";

const initState = {
  list: listmovie,
  movieDetails: {},
  searchedName: "",
  searchedrate: 0,
};
export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDMOVIE:
      return {
        ...state,
        list: [...state.list, { ...action.payload, id: state.list.length + 1 }],
      };
    case GETMOVIEDETAILS:
      let findedmovie = state.list.find((film) => film.id == action.payload);
      return {
        ...state,
        movieDetails: findedmovie,
      };
    case SEARCHBYNAME:
      return { ...state, searchedName: action.payload };
    case SEARCHBYRATE:
      return { ...state, searchedrate: action.payload };
    case RESETRATE:
      return { ...state, searchedrate: 0 };
    default:
      return state;
  }
};
