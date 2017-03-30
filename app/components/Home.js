import React     from 'react';
import { Link }  from 'react-router-dom';

import MovieCard from './MovieCard';

const Home = ({ movies }) => {
  const displayAllMovies = () => {
    return movies.map((movie) => {
      return (
        <MovieCard key={movie.id} {...movie} />
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