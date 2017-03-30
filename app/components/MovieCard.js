import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, id, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w150${poster_path}`}
        alt={`movie poster of ${title}`}
      />
    </Link>
  )
}

export default MovieCard;