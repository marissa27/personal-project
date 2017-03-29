import React, { Component } from 'react';
import MovieIndex from './MovieIndex';
import { Route } from 'react-router-dom';
import Home from './Home';

export default class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchMovies()
  }

  render() {

    console.log('props in App', this.props);

    return (
      <div>
        <h1>Movie Watcher</h1>
        <Route exact path="/" render={({match}) => 
          <Home movies={ this.props.movies } />
        } />
        {this.props.children}
        <MovieIndex />
      </div>
    )
  }
}
