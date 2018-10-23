import react from 'react';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import NewSearch from '../actions/NewSearch';

const MATCHING_ITEM_LIMIT = 25;

class SearchBooks extends Component {

  constructor(props) {
      super(props);
      this.state = {
        books: [],
        showRemoveIcon: false,
        searchValue: '',
      };

      this.handleSearchChange = this.handleSearchChange.bind(this);
    }

  handleSearchChange = (e) => {
    e.preventDefault();
    let value = e.target.value;

    if (this._isMounted) {
      this.setState({
        searchValue: value,
        [e.target.name]: e.target.value,
      });
    }

    if (value === '') {
      this.setState({
        books: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      NewSearch.search(value, (books) => {
        this.setState({
          //books: books
          books: books.slice(0, MATCHING_ITEM_LIMIT),
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      books: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { showRemoveIcon, books } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden'};

    const bookRows = books.map((book, idx) =>(
      /*need to fix onBookClick below*/
      <tr
      key={idx}
      onClick={() => this.props.onBookClick(book)}
      >
      <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>
      <td><a href={book.volumeInfo.link}>{book.volumeInfo.title}</a></td>
      <td>{book.volumeInfo.authors}</td>
      <td>{book.volumeInfo.description}</td>
      </tr>
    ));

    return (
      <div id='book-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th >
                <div className='ui fluid search'>
                  <input
                  className='prompt'
                  type='text'
                  placeholder='Search books...'
                  value={this.state.searchValue}
                  onChange={this.handleSearchChange}
                  />
                  <i className='search icon' />
                </div>
                <i
                className='remove icon'
                onClick={this.handleSearchCancel}
                style={removeIconStyle}
                />
              </th>
            </tr>
            <tr>
              <th >Image</th>
              <th>Title</th>
              <th>Authors</th>
              <th> Description</th>
            </tr>
          </thead>
        <tbody>
          {bookRows}
        </tbody>
      </table>
    </div>
  );
 }
}

export default SearchBooks;
