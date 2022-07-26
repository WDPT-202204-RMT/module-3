function MovieCard(props) {
  const { movie } = props;

  const generateScoreLabel = (score) => {
    if (score > 9) {
      return <span style={{ color: "green" }}>9+</span>;
    } else if (score < 7) {
      return <span style={{ color: "red" }}>{score}</span>;
    } else {
      return <span>{score}</span>;
    }
  };

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>
      {movie.hasOscars ? <p>Got oscars!</p> : <p>Better luck next time!</p>}
    </div>
  );
}

export default MovieCard;
