import React from 'react';
import MovieCard from './MovieCard';

const Home = ({ movies }) => {
  const displayAllMovies = () => {
    return movies.map((movie) => {
      console.log(movie.title);
      return (
        <MovieCard key={movie.id} movie={movie} />
      )
    })
  }

  return (
    <div>
    you are home
    { displayAllMovies() }
    </div>
  )
}

export default Home;
