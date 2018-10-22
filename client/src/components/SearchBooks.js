import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newSearch } from '../actions/NewSearch';

class SearchBooks extends Component {

  constructor(props){
    super(props);
    this.state = {
    query: ''
    }
  }

  handleSubmit = (event) => {
    //debugger
    event.preventDefault();
    //this.props.history.push("/")
    this.props.newSearch(this.state.query)
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    return(
      <div className="bookform">
        <h2>Search for a Book:</h2>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          Keyword, Author, or Title: <input onChange={this.handleChange} type="text" name="query"/><br></br>
          <input type="submit" value="Search" />
        </form>
        </div>
      )
  }
}

export default connect(null, { newSearch })(SearchBooks);
