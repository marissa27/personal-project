const initialState = {
  name: null,
  email: null,
  id: null,
}

const user = (state=initialState, action) => {
  switch(action.type) {
    case 'SIGN_IN':
    return Object.assign({}, state, action.user);
    break;
  default:
    return state;
  }
}

export default user;