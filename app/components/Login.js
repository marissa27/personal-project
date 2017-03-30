import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleUserInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <h2>Login Page</h2>
        <form>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={ (e) => this.handleUserInput(e) }
          />
          Password
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={ (e) => this.handleUserInput(e) }
          />

          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
