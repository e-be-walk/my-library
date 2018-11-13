import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/Sessions';

class SignupForm extends Component {

    state = {
      email: '',
      password: '',
    }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/login")
    this.props.signup(this.state)
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
            <h4>When you click "Sign Up", you will be redirected to the Login Page
            to authenticate your new credentials. Then you can search for books and
            modify your very own user library.</h4>
        </form>
        </div>
      )
  }
}

export default connect(null, { signup })(SignupForm);
