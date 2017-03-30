import React from 'react';

const MovieCard = ({movie}) => {
  return (
      <article className="movie-card">
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w150${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
        <p>{movie.overview}</p>
      </article>
  )
}

export default MovieCard;
