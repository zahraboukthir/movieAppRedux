import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.mv.list);
  const searchedName = useSelector((state) => state.mv.searchedName);
  // console.log(movies);
  let searchedrate = useSelector((state) => state.mv.searchedrate);
  return (
    <>
      {" "}
      <Link to={"/add"}>add</Link> <br />
      <Link to={"/products"}>products</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchedName.toLowerCase()) &&
              el.rating >= searchedrate
          )
          .map((film) => (
            <MovieCard movie={film} key={film.id} />
          ))}
      </div>
    </>
  );
};

export default MovieList;
