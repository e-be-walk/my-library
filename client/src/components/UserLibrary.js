import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBooks from '../components/SearchBooks';

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

  //addUserBook(newBook){
  //  fetch(`http://localhost:3001/users/${this.props.userId}/books`, {
  //    method: 'post',
  //    body: JSON.stringify({ newBook:
  //      [{
  //        id: this.book.id,
  //        title: this.book.volumeInfo.title,
  //        authors: this.book.volumeInfo.authors,
  //        description: this.book.volumeInfo.description,
  //        link: this.book.volumeInfo.previewLink,
  //     }]
  //    }),
    //  headers: {
    //    'Content-Type': 'application/json'
    //  },
    //  success: function(response) {
    //    console.log(response)
    //  }
  //  })
  //  .then((response) => {
  //    return response.json();
  //  })
  //  .then((responseJson) => {
  //    console.log(responseJson);
  //  })
  //}

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
