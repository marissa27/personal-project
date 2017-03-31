import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ signedIn, signOut }) => {

  const login = () => {
    if(!signedIn) {
      return (
        <NavLink
          to='/login'
          activeClassName='selected'>
          Login
        </NavLink>
      )
    } else {
      return (
        <NavLink
          to='/'
          activeClassName='selected'
          onClick={ () => signOut() }>
          Logout
        </NavLink>
      )
    }
  }
  return (
    <nav>
      { login() }
      <NavLink
        to='/create-user'
        activeClassName='selected'>
        Create Account
      </NavLink>
    </nav>
  )
}

export default NavBar;
