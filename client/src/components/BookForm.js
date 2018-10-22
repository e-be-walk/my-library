import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      books: []
    }
  }

  handleSubmit = (event) => {
    //debugger
    event.preventDefault();
    //this.props.history.push("/")
    //this.props.newSearch(this.state.query)
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
        <h2>Add a New Book:</h2>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>

        <input onChange={this.handleChange} type="text" name="query"/><br></br>

        <input type="submit" value="Search" />
        </form>
        <div>

        </div>
        </div>
      )
  }
}
//searchResult appears to need to connect via mapStateToProps
const mapStateToProps = (state) => {
  return { books: state.books};
};

export default BookForm;
