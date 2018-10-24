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
        selectedBooks: [],
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

  addBook = (book) => {
    const newBooks = this.state.selectedBooks.concat(book);
    this.setState({ selectedBooks: newBooks })
  }

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

      <div className='row' key={idx} >
        <div className='col-md-4'>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </div>
        <div className='col-md-8'>
          <h3><a href={book.volumeInfo.link}>{book.volumeInfo.title}</a></h3>
          <h3>{book.volumeInfo.authors}</h3>
          <p>{book.volumeInfo.description}</p><br></br>
          <button onClick={this.addBook} type='submit'>Add this book to your library</button>
        </div>
      </div>
    ));

    return (
      <div id='book-search'>

                <div className='my-4'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h2>Search for Books:</h2>
                    </div>
                  </div>
                  <input
                  className='prompt'
                  type='text'
                  placeholder='Search...'
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

              <h2>Results:</h2>
          <div>
          {bookRows}
          </div>
          </div>
  );
 }
}

export default SearchBooks;
