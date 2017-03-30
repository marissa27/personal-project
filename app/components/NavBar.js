import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to='/login'
        activeClassName='selected'>
        User Login
      </NavLink>
      <NavLink
        to='/create-user'
        activeClassName='selected'>
        Create Account
      </NavLink>
    </nav>
  )
}

export default NavBar;
