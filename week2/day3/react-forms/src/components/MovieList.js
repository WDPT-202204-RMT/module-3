import { useState } from 'react';
import moviesDataJSON from '../movies-data.json';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = (newMovie) => {
    // create a copy the Movies state and and to it the newMovie
    // Update the movie state with the new updated copy

    const updatedMovies = [...movies, newMovie];
    const updatedMoviesData = [...moviesData, newMovie];

    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);
  };

  const filterMovies = (firstLetter) => {
    let filtered;

    if (firstLetter === 'All') filtered = moviesDataJSON;
    else
      filtered = moviesData.filter((movie) => {
        return movie.title[0] === firstLetter;
      });

    setMovies(filtered);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovies={filterMovies} />
      <AddMovie addNewMovie={addNewMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
