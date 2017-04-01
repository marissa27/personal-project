import React, { Component } from 'react';
import { Route, Link }            from 'react-router-dom';

import Home                 from './Home';
import MovieDetails         from './MovieDetails';
import Favorites            from './Favorites';
import NavBar               from './NavBar';
import LoginContainer       from '../containers/LoginContainer';
import CreateUser  from './CreateUser';

export default class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies()
  }

  render() {
    const { movies, user, signOut, showFavorites, favorites, history, fetchMovies } = this.props
    return (
      <div>

        <NavBar
          signedIn={ user.signedIn }
          signOut={ signOut }
          showFavorites={ showFavorites }
          userID={ user.id }
          history={ history }
          fetchMovies={ fetchMovies }

        />

        <Link to={`/`}>
          <h1>Movie Watcher</h1>
        </Link>

        { user.signedIn && <h2>Welcome back, {user.name}</h2> }

        <Route exact path="/" render={({match}) =>
          <Home movies={ movies } signedIn={ user.signedIn } userID={ user.id }/>
        } />
        <Route path='/login' component={ LoginContainer } />

        <Route path='/create-user' component={ CreateUser } />

        <Route exact path='/movie/:id' render={({match}) => {
            const movie = movies.find(movie => movie.id === parseInt(match.params.id))
            return <MovieDetails { ...movie } />
          }
        } />
        <Route exact path='/favorites' render={({match}) =>
            <Favorites userID={ user.id } favorites={ favorites } />
        } />

      </div>
    )
  }
}
