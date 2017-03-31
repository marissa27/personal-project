const initialState = {
  name: null,
  email: null,
  id: null,
  signedIn: false
}

const user = (state=initialState, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return Object.assign({}, state, action.user, { signedIn: true });
      break;
    case 'SIGN_OUT':
      return Object.assign({}, initialState);
      break;
  default:
    return state;
  }
}

export default user;