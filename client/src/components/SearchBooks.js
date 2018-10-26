import react from 'react';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import NewSearch from '../actions/NewSearch';
//import Image from 'react-graceful-image';

const MATCHING_ITEM_LIMIT = 25;

class SearchBooks extends Component {

  constructor(props) {
      super(props);
      this.state = {
        books: [],
        showRemoveIcon: false,
        searchValue: '',
        selectedBooks: [],
        error: null,
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
    return console.log(newBooks)
  }

  defaultImage(ev){
    ev.target.src = '../images/missing.png'
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
    //var image = books.map((book, idx) =>(
      //if (book.volumeInfo.includes(imageLinks)) {
      //  <img src={books.volumeInfo.imageLinks.thumbnail} alt="" />
      //} else {
      //  <img src={'../images/missing.png'} alt="Image Missing"/>
      //}
      //book.volumeInfo.includes(imageLinks) ?
      //<img src={books.volumeInfo.imageLinks.thumbnail} alt="" /> : <img src={'../images/missing.png'} alt="Image Missing"/>
    //));
    //userFunctions = addBook

    const bookRows = books.map((book, idx) =>(


        <div className='col-3 my-4' key={idx}>
          <div className='card'>
            <div className='card-title'>
              <h3><a href={book.volumeInfo.link}>{book.volumeInfo.title}</a></h3>
            </div>
            <div className='card-authors'>
              <h3>{book.volumeInfo.authors}</h3>
            </div>
            <div className='scroll-box'>
              <p>{book.volumeInfo.description}</p><br></br>
            </div>
          <button onClick={this.addBook} type='submit'>Add to your library</button>
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


          <div>
            <div className='row'>
              {bookRows}
            </div>
          </div>
        </div>
  );
 }
}

export default SearchBooks;
