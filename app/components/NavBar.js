import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to='/'
        activeClassName='selected'>
        Home
      </NavLink>
      <NavLink exact to='/login'
        activeClassName='selected'>
        User Login
      </NavLink>
    </nav>
  )
}

export default NavBar;
