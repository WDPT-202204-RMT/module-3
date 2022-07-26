import { useState } from "react";
import SimpleList from "./components/SimpleList";
import Spinner from "./components/Spinner";
import moviesData from "./movies-list.json";
import MovieCard from "./components/MovieCard";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(false);

  const handleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <button onClick={handleShowMovies}>
        {showMovies ? "Hide" : "Show"} movies
      </button>
      {showMovies &&
        movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
    </div>
  );
}

export default App;
