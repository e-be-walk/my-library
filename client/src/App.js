import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './containers/Navbar'
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Logout from './components/Logout';

import SearchBooks from './components/SearchBooks';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MyLibrary.</h1>
          <Navbar />
        </header>
        <Route path="/signup" component={ SignupForm } />
        <Route path="/login" component={ LoginForm } />
        <Route path="/logout" component={ Logout } />
        <Route path="/search" component={ SearchBooks } />
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
