import React, { Component } from 'react';
import { login } from '../actions/Sessions';

class SignupForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    //debugger
    event.preventDefault();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className="signup-form">
        <h2>Sign Up</h2>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          Email: <input onChange={this.handleChange} type="text" name="email"/><br></br>
          Password: <input onChange={this.handleChange} type="password" name="password"/><br></br>
          <input type="submit" value="Sign Up" />
        </form>
        </div>
      )
  }
}

export default SignupForm;
