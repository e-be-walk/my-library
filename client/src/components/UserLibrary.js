import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserBook, fetchUserBooks } from '../actions/BookActions';

import Book from './Book'

class userLibrary extends Component {
  constructor() {
    super()

    this.state = {
      selectedBooks: [],
      userId: '',
      books: [],
      counter: 0,
    };
  }

  componentDidMount() {
      const userId = this.props.userId;
      if (this.props.selectedBooks.length === 0) {
      this.props.fetchUserBooks(userId)
    }
}

  deleteBook = (book) => {
    const userId = this.props.userId;
    this.props.deleteUserBook(userId, book)
    this.props.history.push("/library")
  };

  render(){
    const userBooks = this.props.selectedBooks.map(book => <Book key={ book.id } book={ book }/>);

    return(
      <div className="user-library">
      <br></br>
      <h1>Your library:</h1>
      <br></br>
        <div className="row">
          {userBooks}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.session.auth.userId,
    selectedBooks: state.books.selectedBooks,
  }
}

const mapDispatchToProps = dispatch => ({
  deleteUserBook: (userId, book) => dispatch(deleteUserBook(userId, book)),
  fetchUserBooks: (userId) => dispatch(fetchUserBooks(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(userLibrary);
