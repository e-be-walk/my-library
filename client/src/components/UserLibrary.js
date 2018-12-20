import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserBook, fetchUserBooks } from '../actions/BookActions';

// import Book from './Book'

class userLibrary extends Component {
  constructor() {
    super()

    this.state = {
      selectedBooks: [],
      userId: '',
      books: [],
      counter: 0,
    };
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
      const userId = this.props.userId;
      if (this.props.selectedBooks.length === 0) {
      this.props.fetchUserBooks(userId)
    }
}


handleSort = () => {
  let sortedBooks = this.props.selectedBooks.sort(function(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  this.setState((state) => {
    return {selectedBooks: sortedBooks}
  });
  console.log(sortedBooks)
}

  deleteBook = (book) => {
    const userId = this.props.userId;
    this.props.deleteUserBook(userId, book)
    this.props.history.push("/library")
  };

  render(){
    // const userBooks = this.props.selectedBooks.map(book => <Book key={ book.id } book={ book }/>);
    const userBooks = this.props.selectedBooks.map((book) =>(
     <div className='col-3 my-4' key={book.id}>
       <div className='card'>
         <div className='card-title'>
           <a href={book.link}><h3>{book.title}</h3></a>
         </div>
         <div className='card-authors'>
           <h3>{book.authors}</h3>
         </div>
         <div className='scroll-box'>
           <p>{book.description}</p><br></br>
         </div>
         <button onClick={() => this.deleteBook(book)}>Remove this book.</button>
       </div>
     </div>
    ));


    return(
      <div className="user-library">
      <br></br>
      <h1>Your library:</h1>
      <br></br>
        <button onClick={this.handleSort}> Sort these by title</button>
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
