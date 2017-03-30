import React from 'react';

const Login = () => {
  return(
    <div>
      <h2>Login Page</h2>
      <form>
        Email
        <input type="text" name="email" value="Email"/>
        Password
        <input type="text" name="password" value="Password"/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Login;
