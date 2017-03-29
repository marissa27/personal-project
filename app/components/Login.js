import React from 'react';

const Login = () => {
  return(
    <div>
      <h2>Login Page</h2>
      <form>
        Email
        <input type="text" name="email" value="Gimme that email, bitch"/>
        Password
        <input type="text" name="password" value="Gimme that password, bitch"/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Login;
