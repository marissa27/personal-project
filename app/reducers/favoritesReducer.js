const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SHOW_FAVORITES':
      return [...action.favorites];
      break;

    default:
      return state;
  }
}



export default favorites;