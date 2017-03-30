import React, { Component } from 'react';
import MovieIndex           from './MovieIndex';
import MovieDetails         from './MovieDetails';
import { Route }            from 'react-router-dom';
import Home                 from './Home';
import Login                from './Login';
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
    console.log('props in App', this.props);

    return (
      <div>
        <NavBar />

        <h1>Movie Watcher</h1>

        <Route path='/login' component={ Login } />

        <Route exact path="/" render={({match}) =>
          <Home movies={ movies } />
        } />

        <Route exact path='movie/:id' render={({match}) => {
            const movie = movies.find(movie => movie.id === parseInt(match.params.id, 10))
            console.log(movie);
            return <MovieDetails { ...movie } />
          }
        } />

        {this.props.children}
      </div>
    )
  }
}
