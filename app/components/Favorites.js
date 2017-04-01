import React from 'react'

import MovieCard from './MovieCard';

const Favorites = ({ userID, favorites }) => {

  const displayUserFavorites = () => {
    return favorites.map(movie =>
      <MovieCard key={ movie.id }{ ...movie } />
    )
  }

  return (
    <section>
      <h1>Favorites</h1>
      { displayUserFavorites() }
    </section>
  )
}

export default Favorites