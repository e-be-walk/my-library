import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {

    const isAuthenticated = this.props.session.auth.isAuthenticated

    const userLinks = (
      <div className="nav fixed-top container">
        <Link className="nav-link" to="/search">Search  </Link>
        <Link className="nav-link" to="/search">*Library*  </Link>
        <Link className="nav-link" to="/logout">Logout  </Link>
      </div>
    )

    const guestLinks = (
      <div className="nav fixed-top container">
        <Link className="nav-link" to="/search">Search  </Link>
        <Link className="nav-link" to="/signup">Sign up  </Link>
        <Link className="nav-link" to="/login">Login  </Link>
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
