import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, id, poster_path, signedIn, release_date, vote_average, userID, overview }) => {


  const addFavorite = () => {
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ movie_id: id, user_id: userID, title, poster_path, release_date, vote_average, overview })
    })
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(json => {
      console.log(json);
    })
  }

  const removeFavorite = () => {
    fetch(`http://localhost:3000/api/users/${userID}/favorites/${favoriteID}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ user_id: userID, movie_id: favoriteID })
    })
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(json => {
      console.log(json);
    })
  }

  const inFavorites = () => {
    fetch(`http://localhost:3000/api/users/${userID}/favorites`)
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(json => {
      console.log(json);
      return json
    })
  }

  // const handleFavorite = () => {
  //   console.log('clicked');
  //   addFavorite()
  //   !signedIn ? addFavorite() : addFavorite();
  // }

  return (
    <article>
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w150${poster_path}`}
          alt={`movie poster of ${title}`}
        />
      </Link>
      <button onClick={ () => addFavorite() }>Fav</button>
      {/* <button onClick={ () => inFavorites() }>Fav</button> */}
      {/* <button onClick={ () => removeFavorite() }>Remove</button> */}
    </article>
  )
}

export default MovieCard;