import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {

    const isAuthenticated = this.props.session.auth.isAuthenticated

    const userLinks = (
      <div className="main-navbar">
        <Link className="navbar-links" to="/search">Search  </Link>
        <Link className="navbar-links" to="/search">*Library*  </Link>
        <Link className="navbar-links" to="/logout">Logout  </Link>
      </div>
    )

    const guestLinks = (
      <div className="main-navbar">
        <Link className="navbar-links" to="/search">Search  </Link>
        <Link className="navbar-links" to="/signup">Sign up  </Link>
        <Link className="navbar-links" to="/login">Login  </Link>
      </div>
    )
    return(
      <div>
        { isAuthenticated ? userLinks : guestLinks }
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
