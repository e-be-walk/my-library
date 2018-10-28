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

        <SearchBooks
        onBookClick={this.addBook}
        />

        <UserLibrary
        books={selectedBooks}
        />
      </div>
    );
  }
}

export default UserContainer;
