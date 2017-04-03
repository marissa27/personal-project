import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Route, Link }            from 'react-router-dom';
import { mount, shallow }          from 'enzyme';
import fetchMock from 'fetch-mock';
import sinon              from 'sinon';

import App              from '../../components/App';
import Home                 from '../../components/Home';
import NavBar               from '../../components/NavBar';
import CreateUser  from '../../components/CreateUser';

describe('App', () => {

  const user = {
    id: 1,
    name: 'marissa',
    email: 'reinke.marissa@gmail.com',
    signedIn: true
  }

//   it('Renders Home, Favorites, NavBar', () => {
//   const wrapper = shallow(
//     <App
//       user={user}
//       fetchMovies={ () => {} }
//     />
//   );
//
//   expect(wrapper.find('Home').length).toEqual(1);
//   expect(wrapper.find('Favorites').length).toEqual(1);  expect(wrapper.find('NavBar').length).toEqual(1);
// });

// it('Should take in user props', () => {
//   const wrapper = mount(
//     <App
//       user={user}
//       fetchMovies={ () => {} }
//     />
//   );

//   expect(wrapper.props().user).toEqual({
//     id: 1,
//     name: 'marissa',
//     email: 'reinke.marissa@gmail.com',
//     signedIn: true
//     });
//   });
//

// it('calls componentWillMount', () => {
//     sinon.spy(App.prototype, 'componentWillMount');
//     const wrapper = mount(
//       <App
//         user={user}
//         fetchMovies={ () => {} }
//         history={ browserHistory }
//        />
//     );
//
//     expect(App.prototype.componentWillMount.calledOnce).to.equal(true);
//   });

});
