function MovieCard({ title, genre, year, rating, emoji }) {
  return (
    <div className="movie-card">
      <div className="movie-emoji">{emoji}</div>
      <h2>{title}</h2>
      <p className="genre">{genre}</p>
      <p className="year">{year}</p>
      <p className="rating">{rating}</p>
      <button className="watch-btn">Смотреть</button>
    </div>
  );
}

export default MovieCard;