import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  validateEmail(email) {
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(email);
  }

  handleCreateUser(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  createUser(e) {
    e.preventDefault();
    const { password, email, name } = this.state;
    const { history } = this.props;

    if (!this.validateEmail(email)) {
      this.setState({
        error: 'Please enter a valid email'
      })
      return
    }
    fetch('http://localhost:3000/api/users/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password, name })
    })
    .then(response => {
      console.log(response)
      if(response.status > 300) {
        this.setState({
          error: 'Email in use',
          email: '',
          password: '',
          name: ''
        });
        throw Error('Invalid email');
      }
      history.push('/login')
    })
  }

  render() {
    return(
      <div>
        <h2>Create Account Page</h2>
        <form>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={ (e) => this.handleCreateUser(e) }
          />
          Email
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={ (e) => this.handleCreateUser(e) }
          />
          Password
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={ (e) => this.handleCreateUser(e) }
          />

        <button onClick={ (e) => this.createUser(e) } >Create</button>

        { this.state.error !== '' && <h2>{this.state.error}</h2>}
      </form>
    </div>
    );
  }
}
