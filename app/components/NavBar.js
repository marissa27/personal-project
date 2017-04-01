import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ signedIn, signOut, userID, history, showFavorites }) => {

  const login = () => {
    if(!signedIn) {
      return (
        <button
          className='nav-button'
          onClick={ () => history.push('/login') }>
          Login
        </button>
      )
    } else {
      return (
        <button
          className='nav-button'
          onClick={ () => signOut() }>
          Logout
        </button>
      )
    }
  }

  const fetchFavorites = () => {
    if(!userID) {
      history.push('/login')
    } else {
      fetch(`http://localhost:3000/api/users/${userID}/favorites`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        showFavorites(json.data)
        history.push('/favorites')
      })
    }
  }

  return (
    <nav>
      { login() }
      <button
        className='nav-button'
        onClick={ () => history.push('/create-user') }>
        Create Account
      </button>
      <button
        className='nav-button'
        onClick={ () => fetchFavorites() }>
        Favorites
      </button>
    </nav>
  )
}

export default NavBar;
