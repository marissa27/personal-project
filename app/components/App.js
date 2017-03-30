import React, { Component } from 'react';
import { Route }            from 'react-router-dom';

import Home                 from './Home';
import MovieDetails         from './MovieDetails';
import LoginContainer       from '../containers/LoginContainer';
import NavBar               from './NavBar';

export default class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies()
  }

  render() {
    const { movies } = this.props

    return (
      <div>

        <NavBar />
        <h1>Movie Watcher</h1>

        <Route exact path="/" render={({match}) =>
          <Home movies={ movies } />
        } />
        <Route path='/login' component={ LoginContainer } />
        <Route exact path='/movie/:id' render={({match}) => {
            const movie = movies.find(movie => movie.id === parseInt(match.params.id))
            return <MovieDetails { ...movie } />
          }
        } />

      </div>
    )
  }
}
