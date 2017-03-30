import { connect } from 'react-redux';

import App         from '../components/App'
import { fetchMovies } from '../actions/actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

