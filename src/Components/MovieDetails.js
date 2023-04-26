import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../js/actions/movieActions";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { idmovie } = useParams();
  let film = useSelector((state) => state.movieDetails);
  // console.log(film);
  useEffect(() => {
    dispatch(getMovie(idmovie));
  }, [dispatch, idmovie]);

  return (
    <>
      <div>
        <p>{film && film.name}</p>
        <p>{film && film.desc}</p>
        <iframe
          width="560"
          height="315"
          src={film && film.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Link to={`/`}>
          <button variant="primary">Go somewhere</button>
        </Link>
      </div>
    </>
  );
};

export default MovieDetails;
