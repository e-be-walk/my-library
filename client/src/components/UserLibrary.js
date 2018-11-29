import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserBook, fetchUserBooks } from '../actions/BookActions';

class userLibrary extends Component {

  constructor(props) {
      super(props);
      this.state = {
        selectedBooks: [],
        userId: '',
        books: [],
      };
    }


        // componentWillMount() {
          //debugger
          // return (dispatch) => {
          //
          //   dispatch({type: 'LOADING_BOOKS'})
          //   debugger
         // return
         // fetch(`http://localhost:3001/users/${this.props.userId}/books`)
         //   .then(response => response.json())
         //   .then( response => {
         //     console.log("User Books:", response)
         //     this.setState({
         //       selectedBooks: response
         //       })
             // dispatch({ type: 'USER_BOOKS', selectedBooks: response})
         //  })
         // }

         // When you try to incorporate fetchBooks as a function triggered by an event, oddly
         // the return of information loops but the DOM never updates. When used in a componentWillMount
         // the information is retrieved only once but also does not update DOM.

  componentDidMount() {
      const userId = this.props.userId;
      //debugger
      if (this.props.selectedBooks.length === 0) {
      this.props.fetchUserBooks(userId)
    }
}

 //   fetchBooks= () => {
 //     const userId = this.props.userId;
 //     this.props.fetchUserBooks(userId)
 //     this.setState({
 //        selectedBooks: [{
 //
 //        }]
 // })
 //     this.props.history.push("/library")
 //   }



  deleteBook = (book) => {
    const userId = this.props.userId;
    this.props.deleteUserBook(userId, book)
    this.props.history.push("/library")
  };



  render(){
    // debugger
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
  // selectedBooks: (userId) => dispatch(fetchUserBooks(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(userLibrary);
