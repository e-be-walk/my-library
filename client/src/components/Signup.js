import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/Sessions';

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    //this.handleSignup = this.handleSignup.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/search")
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
        </form>
        </div>
      )
  }
}

export default connect(null, { signup })(SignupForm);
