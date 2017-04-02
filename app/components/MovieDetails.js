import React from 'react'

const MovieDetails = ({ title, poster_path, overview, vote_average, vote_count, history }) => {
  return (
    <article className="movie-card card">
      <h2>{ title }</h2>
      <img
        src={`https://image.tmdb.org/t/p/w150${poster_path}`}
        alt={`movie poster of ${title}`}
      />
      <p>{ overview }</p>
      <p>{ vote_average }</p>
      <p>{ vote_count }</p>
      <button
        className='back-button'
        onClick={ () => history.push('/') }>
        Back
      </button>
    </article>
  )
}

export default MovieDetails
