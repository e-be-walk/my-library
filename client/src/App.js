import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './containers/Navbar'
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Logout from './components/Logout';

import SearchBooks from './components/SearchBooks';
import ErrorBoundary from './components/ErrorBoundary'

import { connect } from 'react-redux';

class App extends Component {

  render() {
    const isAuthenticated = this.props.session.auth.isAuthenticated;
    const currentUser = this.props.session.current_user;

    const userRoutes = (
      <div className='app container'>
        <Route path="/logout" component={ Logout } />
        <ErrorBoundary>
        <Route path="/search" component={ SearchBooks } />
        </ErrorBoundary>
      </div>
    )

    const guestRoutes = (
      <div className='app container'>
        <Route path="/signup" component={ SignupForm } />
        <Route path="/login" component={ LoginForm } />

        <Route path="/search" component={ SearchBooks } />
      
      </div>
    )

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MyLibrary.</h1>
          <Navbar />
        </header>

          { isAuthenticated ? userRoutes : guestRoutes }
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { session: state.session}
}

export default connect(mapStateToProps)(App);
