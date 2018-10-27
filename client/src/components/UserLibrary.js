import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render(){
    return(
      <div className="user-library">
      <h1>Your library:</h1>
        {this.state.selectedBooks.map(b => <li key={"books-li-" + b.id}>
        {b.title}<br></br>
        {b.author}<br></br></li>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {userId: state.session.auth.userId}
}

export default connect(mapStateToProps)(userLibrary);
