import React, { Component } from 'react';
import MovieIndex from '../MovieIndex/MovieIndex'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        {this.props.children}
        <MovieIndex />
      </div>
    )
  }
}
