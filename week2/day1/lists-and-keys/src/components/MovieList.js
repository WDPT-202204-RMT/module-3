import { useState } from "react";
import movieData from "../movies-data.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState(movieData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((element) => element._id !== movieId);
    setMovies(filteredMovies);
    /*     setMovies((oldMovies) =>
      oldMovies.filter((movie) => movie._id !== movieId)
    ); */
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <MovieCard movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
}

export default MovieList;
