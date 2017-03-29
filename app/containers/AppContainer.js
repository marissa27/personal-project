import { connect } from 'react-redux';
import App         from '../components/App'
import fetchMovies from '../actions/actions'

const mapStateToProps = (state) => {

  console.log('mapToProps', state.movies);
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
