import configureMockStore from 'redux-mock-store';
import actions from '../actions/userActions';

const store = configureMockStore()();

// const mockUser = {
//   data: {
//     id: 1,
//     name: 'Inigo Montoya',
//     password: 'youkillmyfather',
//     email: 'prepare@todie.com'
//   }
// }

describe('actions', () => {
  it('should do the thing', () => {
    
  });
  
  // afterEach(() => {
  //   store.clearActions();
  // });
  // 
  // it('creates SIGN_IN when initiating signIn action', () => {
  //   let expectedAction = { type: 'SIGN_IN', user: mockUser.data };
  //   store.dispatch(actions.signIn(mockUser.data));
  //   let createdActions = store.getActions();
  //   expect(createdActions[0]).toEqual(expectedAction);
  // });
});