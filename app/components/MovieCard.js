import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, id, poster_path, signedIn }) => {

  console.log(signedIn);

  const handleFavorite = () => {
    if(!signedIn) {
      console.log('sign in');
      
    } else {
      console.log('signed IN.......');
    }
  }

  return (
    <article>
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w150${poster_path}`}
          alt={`movie poster of ${title}`}
        />
      </Link>
      <button onClick={ () => handleFavorite() }>Fav</button>
    </article>
  )
}

export default MovieCard;