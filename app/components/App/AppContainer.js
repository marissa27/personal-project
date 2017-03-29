import { connect } from 'react-redux';
import App from './App'
import fetchMovies from '../../actions/actions'

const mapStateToProps = (state) => {

  console.log('mapToProps', state.renderMovies);
  return {
    movies: state.renderMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
