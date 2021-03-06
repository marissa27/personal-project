import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import AppContainer from '../../containers/AppContainer';
import App from '../../components/App';

const mockStore = configureMockStore()({
  user: {
    name: 'Mike',
    email: 'mike@mike.com',
    id: 1,
    signedIn: true
  }
})

const setup = () => {
  const Container = mount(
    <Provider store={ mockStore } >
      <AppContainer />
    </Provider>
  );
  const Component = Container.find(App);
  return {
    Container,
    Component
  }
}

describe('AppContainer', () => {
  // const { Container, Component } = setup();

  it('should ', () => {

  });

})
