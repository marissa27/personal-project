import React, { Component } from 'react';
import { Route }            from 'react-router-dom';

import Home                 from './Home';
import MovieDetails         from './MovieDetails';
import LoginContainer       from '../containers/LoginContainer';
import CreateUserContainer from '../containers/CreateUserContainer';
import NavBar               from './NavBar';

export default class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies()
  }

  render() {
    const { movies, user } = this.props

    return (
      <div>

        <NavBar />
        <h1>Movie Watcher</h1>
        { user.name && <h2>Hello {user.name}</h2> }

        <Route exact path="/" render={({match}) =>
          <Home movies={ movies } />
        } />
        <Route path='/login' component={ LoginContainer } />

        <Route path='/create-user' component={ CreateUserContainer } />

        <Route exact path='/movie/:id' render={({match}) => {
            const movie = movies.find(movie => movie.id === parseInt(match.params.id))
            return <MovieDetails { ...movie } />
          }
        } />

      </div>
    )
  }
}
