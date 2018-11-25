import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/Sessions';

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/library")
    this.props.login(this.state)
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
      <br></br>
        <h2>Login:</h2>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          Email: <input onChange={this.handleChange} type="text" name="email"/><br></br>
          Password: <input onChange={this.handleChange} type="password" name="password"/><br></br>
          <input type="submit" value="Login" />
        </form>
        </div>
      )
  }
}

export default connect(null, { login })(LoginForm);
