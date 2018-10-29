import React, { Component } from 'react';
import SearchBooks from '../components/SearchBooks';
import SelectedBooks from '../components/SelectedBooks';
import { connect } from 'react-redux';
//import UserLibrary from '../components/UserLibrary';


class UserContainer extends Component {
  state = {
    selectedBooks: [],
    userBooks: [],
    userId: '',
  }

  addBook = (book) => {
    const newBooks = this.state.selectedBooks.concat(book);
    this.setState({ selectedBooks: newBooks });
  }


  render() {
    const { selectedBooks } = this.state;
    const { userBooks } = this.state;

    return (
      <div className='App'>

        <SearchBooks
        onBookClick={this.addBook}
        />

        <SelectedBooks
        books={selectedBooks}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {userId: state.session.auth.userId}
}

export default connect(mapStateToProps)(UserContainer);