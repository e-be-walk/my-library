import React, { Component } from 'react';
import SearchBooks from '../components/SearchBooks';
import UserLibrary from '../components/UserLibrary';

class userContainer extends Component {
  state = {
    selectedBooks: [],
    userId: '',
  }

  addBook = (book) => {
    const newBooks = this.state.selectedBooks.concat(book);
    this.setState({ selectedBooks: newBooks });
  }

  render() {
    const { selectedBooks } = this.state;

    return (
      <div className='App'>
        <UserLibrary
        books={selectedBooks}
        />
        <SearchBooks
        onBookClick={this.addBook}
        />
      </div>
    );
  }
}

export default UserContainer;
