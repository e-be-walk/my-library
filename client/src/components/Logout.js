import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logout extends Component {

  componentDidMount(){
    this.props.dispatch({ type: "LOGOUT" })
  }

  render() {
    return(
      <div className='logout'>
        <h1>You are logged out</h1>
      </div>
    )
  }
}

export default connect()(Logout);
