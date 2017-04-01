const favorites = (state=[], action) => {
  console.log(action.favorites);
  switch (action.type) {
    case 'SHOW_FAVORITES':
      return [...state, ...action.favorites];
      break;

    default:
      return state;
  }
}



export default favorites;