import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: 'this.props.id',
      title: '',
      author: ''
    }
  }

  render() {
   return(
     <li className='book_result'>

       <div className='result_text'>
       <p><span className='reslabel'>Title:</span> {this.title}</p>
       <p><span className='reslabel'>Author:</span> {this.authors}</p>
       </div>
     </li>
   );
 }
}

export default SearchResult;
