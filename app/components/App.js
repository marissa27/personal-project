import React, { Component } from 'react';
import MovieIndex           from './MovieIndex';
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

    console.log('props in App', this.props);

    return (
      <div>
        <h1>Movie Watcher</h1>

        <NavBar />

        <Route exact path="/" render={({match}) =>
          <Home movies={ this.props.movies } />
        } />

        <Route exact path='/login' component={Login} />

        {this.props.children}
      </div>
    )
  }
}
