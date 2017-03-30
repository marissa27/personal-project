import React     from 'react';
import { Link }  from 'react-router-dom';

import MovieCard from './MovieCard';

const Home = ({ movies, signedIn }) => {
  const displayAllMovies = () => {
    return movies.map((movie) => {
      return (
        <MovieCard
          key={ movie.id }
          { ...movie }
          signedIn={ signedIn }
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