import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: this.props.id,
      title: this.props.volumeInfo.title,
      author: this.props.volumeInfo.authors[0]
    }
  }

  render() {
   return(
     <li className='book_result'>
       <img src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
       <div className='result_text'>
       <p><span className='reslabel'>Title:</span> {this.props.volumeInfo.title}</p>
       <p><span className='reslabel'>Author:</span> {this.props.volumeInfo.authors}</p>
       </div>
     </li>
   );
 }
}

export default SearchResult;
