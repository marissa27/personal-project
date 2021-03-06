import React from 'react';
import { Link } from 'react-router-dom';

import MovieCard from './MovieCard';

const Home = ({ movies, signedIn, userID, favorites, fetchFavorites, history, addFavorite, removeFavorite }) => {
  const displayAllMovies = () => {
    return movies.map((movie) => {
      return (
        <MovieCard
          key={ movie.id }
          movie_id={ movie.id }
          { ...movie }
          signedIn={ signedIn }
          userID={ userID }
          favorites={ favorites }
          fetchFavorites={ fetchFavorites }
          addFavorite={ addFavorite }
          removeFavorite={ removeFavorite }
          history={ history }
        />
      )
    })
  }

  return (
    <div>
      <section className="movie-wrapper">
        { displayAllMovies() }
      </section>
    </div>
  )
}

export default Home;