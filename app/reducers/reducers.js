const renderMovies = (state=[], action) => {

  console.log('inside reducer', state, action.movies);

  switch (action.type) {
    case 'RECEIVED_MOVIES':
      return [...state, ...action.movies.results];
      break;

    default:
      return state;
  }
}

export default renderMovies;