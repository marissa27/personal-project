import React from 'react';
import MovieCard from './MovieCard';

const Home = ({ movies }) => {
  const displayAllMovies = () => {
    return movies.map((movie) => {
      console.log(movie.title);
      return (
        <MovieCard movie={movie.title} />
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