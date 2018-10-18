import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    //const isAuthenticated = this.props.session.auth.isAuthenticated
    return(
      <div className="main-navbar">
        <Link className="navbar-links" to="/">Home</Link>
        <Link className="navbar-links" to="/signup">Sign up</Link>
        <Link className="navbar-links" to="/login">Login</Link>
        <Link className="navbar-links" to="/logout">Logout</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(Navbar);
