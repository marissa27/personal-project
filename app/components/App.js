import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
// import MovieDetails from './MovieDetails';


export default class App extends Component {
  // constructor() {
  //   super();
  //   this.fetchFavorites = this.fetchFavorites.bind(this);
  // }

  // componentWillMount() {
  //   this.props.fetchMovies()
  // }

  render() {
    const { movies, history, fetchMovies } = this.props
    return (
      <div>
        <header>
          <Link to={`/`}>
            <Header />
          </Link>
        </header>

        <Route exact path="/" render={({match}) =>
          <Header
            history={ history }
          />
        } />

        <Route exact path='/movie/:id' render={({match}) => {
            const movie = movies.find(movie => movie.id === parseInt(match.params.id))
            return <MovieDetails { ...movie } history={ history } />
          }
        } />

      </div>
    )
  }
}
