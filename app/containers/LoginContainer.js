import { connect } from 'react-redux';
import Login         from '../components/Login';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


