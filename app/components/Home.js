import React     from 'react';
import { Link }  from 'react-router-dom';

import MovieCard from './MovieCard';
import Login     from './Login';

const Home = ({ movies }) => {
  console.log(movies);
  const displayAllMovies = () => {
    return movies.map((movie) => {
      return (
        <MovieCard key={movie.id} movie={movie} />
      )
    })
  }

  return (
    <div>
      <p>To navigate our site please click a link then head towards your searchbar and click into it then hit enter.</p>
      <p>you are home</p>
      <section className="movie-wrapper">
        { displayAllMovies() }
      </section>
    </div>
  )
}

export default Home;