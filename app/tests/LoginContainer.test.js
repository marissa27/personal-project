import React              from 'react';
import { mount }          from 'enzyme';
// mount full rendered component - lets you test multiple layers

import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';

import LoginContainer     from '../../containers/LoginContainer';
import Login              from '../components/Login';

const mockStore = configureMockStore()({
  user: {
    name: 'Bob LobLaw',
    id: 1,
    email: 'foo@bar.com'
  }
});

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <LoginContainer />
    </Provider>
  );

  const Component = Container.find(Login);

    return {
      Container,
      Component
    }
}

describe('LoginContainer', () => {
  const { Container, Component } = setup();


  it('should pass the appropriate props from state', () => {

    expect(Component.props().user).toEqual({
      name: 'Bob LobLaw',
      id: 1,
      email: 'foo@bar.com'
    });
  });

  it('should pass down the correct action creators as props', () => {

    expect(Object.keys(Component.props())).toContain(
      'fetchMovies', 'signIn', 'signOut', 'showFavorites'
    );
  });

});
