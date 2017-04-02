import configureMockStore from 'redux-mock-store';
import { signIn, signOut, showFavorites, receivedMovies } from '../actions/actions';

const store = configureMockStore()();

const mockData = {
  user: {
    id: 1,
    name: 'Inigo Montoya',
    password: 'youkillmyfather',
    email: 'prepare@todie.com'
  },
  movies:[{
    id: 1,
    movie_id: 263115,
    user_id: 2,
    title: "Logan",
    poster_path: "/45Y1G5FEgttPAwjTYic6czC9xCn.jpg",
    release_date: "2017-02-28",
    vote_average: "7.6",
    overview: "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces."
  },
  {
    id: 2,
    movie_id: 335797,
    user_id: 2,
    title: "Sing",
    poster_path: "/s9ye87pvq2IaDvjv9x4IOXVjvA7.jpg",
    release_date: "2016-11-23",
    vote_average: "6.7",
    overview: "A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition."
  }]
}

describe('actions', () => {
  afterEach(() => {
    store.clearActions();
  });
  
  it('creates SIGN_IN when initiating signIn action', () => {
    let expectedAction = { type: 'SIGN_IN', user: mockData.user };
    store.dispatch(signIn(mockData.user));
    
    let createdActions = store.getActions();
    
    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });
  
  it('creates SIGN_OUT when initiating signOut action', () => {
    let expectedAction = { type: 'SIGN_OUT' };
    store.dispatch(signOut());
    
    let createdActions = store.getActions();
    
    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  }); 
  
  it('creates SHOW_FAVORITES when initiating showFavorites action', () => {
    let expectedAction = { type: 'SHOW_FAVORITES', favorites: mockData.movies };
    store.dispatch(showFavorites(mockData.movies));
    
    let createdActions = store.getActions();
    
    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });
  
  it('creates RECEIVED_MOVIES when initiating receivedMovies action', () => {
    let expectedAction = { type: 'RECEIVED_MOVIES', movies: mockData.movies };
    store.dispatch(receivedMovies(mockData.movies));
    
    let createdActions = store.getActions();
    
    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });
  
});