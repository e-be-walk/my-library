import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserBook, fetchUserBooks } from '../actions/BookActions';
// import { fetchUserBooks } from '../actions/FetchBooks';

class userLibrary extends Component {

  state = {
    selectedBooks: [],
    userId: '',
    books: [],
  }

  // componentDidMount() {
  //   this.props.fetchUserBooks(this.props.userId)
  // }
  componentWillMount(){
    // return (dispatch) => {
      // dispatch({type: 'LOADING_BOOKS'})

   fetch(`http://localhost:3001/users/${this.props.userId}/books`)
   .then(response => response.json())
   .then( response => {
     console.log("User Books:", response)
     this.setState({
       selectedBooks: response
       })
       // dispatch({ type: 'USER_BOOKS', selectedBooks: response})
     })
   // }
  }

  // fetchBooks = (e) => {
  //   e.preventDefault();
  //   const userId = this.props.userId;
  //
      // if(this._isMounted) {
      //   this.setState({
      //     selectedBooks: [],
      //   });
      // }
    // this.props.fetchUserBooks(this.state)
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
  //   this.props.history.push("/library")
  //
  //};

  // componentDidMount() {
  //   this._isMounted = true
  //   this.props.fetchUserBooks(this.props.userId)
  // }
  //
  // componentWillUnmount() {
  //   this._isMounted = false
  // }

  deleteBook = (book) => {
    const userId = this.props.userId;
    this.props.deleteUserBook(userId, book)
    this.props.history.push("/library")
  };



  render(){
    const userBooks = this.state.selectedBooks.map((book, idx) =>(
        <div className='col-3 my-4' key={idx}>
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
    selectedBooks: state.selectedBooks,
  }
}

const mapDispatchToProps = dispatch => ({
  deleteUserBook: (userId, book) => dispatch(deleteUserBook(userId, book)),
  //fetchUserBooks: userId => dispatch(fetchUserBooks(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(userLibrary);
