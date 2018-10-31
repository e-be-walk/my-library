import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBooks from '../components/SearchBooks';
import DeleteBook from '../actions/DeleteBook';

class userLibrary extends Component {

  state = {
    selectedBooks: [],
    userId: '',
  }

  componentWillMount(){
    fetch(`http://localhost:3001/users/${this.props.userId}/books`)
    .then(response => response.json())
    .then( response => {
      console.log("User Books:", response)
      this.setState({
        selectedBooks: response
        })
      })
  }

  deleteBook = (book) => {
    const userId = this.props.userId;

    DeleteBook.deleteUserBook(userId, book, () => {
      this.setState({
        selectedBooks: [],
      })
    })
    //The following does not work in refreshing the browser to re-render the new component
    this.props.history.push(`/users/${this.props.userId}/books`)
    this.componentWillUnmount();
    this.props.history.push(`/library`);
  };

  componentWillUnmount() {
    this._isMounted = false
  }

  render(){
    const userBooks = this.state.selectedBooks.map((book, idx) =>(
        <div className='col-3 my-4' key={idx}>
          <div className='card'>
            <div className='card-title'>
              <h3>{book.title}</h3>
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
      <h1>Your library:</h1>
        <div className="row">
          {userBooks}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {userId: state.session.auth.userId}
}

export default connect(mapStateToProps)(userLibrary);
