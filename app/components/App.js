import React, { Component } from 'react';
import { Route, Link }            from 'react-router-dom';

import Home                 from './Home';
import MovieDetails         from './MovieDetails';
import LoginContainer       from '../containers/LoginContainer';
import CreateUserContainer  from '../containers/CreateUserContainer';
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

        <Link to={`/`}>
          <h1>Movie Watcher</h1>
        </Link>

        { user.signedIn && <h2>Welcome back, {user.name}</h2> }

        <Route exact path="/" render={({match}) =>
          <Home movies={ movies } signedIn={ user.signedIn }/>
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
