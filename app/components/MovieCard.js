import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title, id, poster_path, overview } = movie
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

// const { title, id, poster_path, overview } = movie
// return (
//   <article className="movie-card">
//     <Link to={`/movie/${id}`}>
//       <h2>{title}</h2>
//     </Link>
//     <img src={`https://image.tmdb.org/t/p/w150${poster_path}`}
//       alt={`movie poster of ${title}`}
//     />
//     <p>{movie.overview}</p>
//   </article>
// )
