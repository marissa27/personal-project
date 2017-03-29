import React     from 'react';
import { Link }  from 'react-router-dom';

import MovieCard from './MovieCard';
import Login     from './Login';

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
    <p>you are home</p>

    <Link to="/login">
      <h3>
          Click me to login, bitch.
      </h3>
    </Link>

    { displayAllMovies() }

    </div>
  )
}

export default Home;

// <Route exact path='/login' component={ Login }>
