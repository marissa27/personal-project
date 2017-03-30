import { connect } from 'react-redux';

import CreateUser         from '../components/CreateUser';
import { signIn } from '../actions/actions'


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
