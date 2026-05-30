import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          
          genre={movie.genre}
          year={movie.year}
          rating={movie.rating}
          emoji={movie.emoji}
        />
      ))}
    </div>
  );
}

export default MovieList;