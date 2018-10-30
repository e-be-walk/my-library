import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSearch from '../actions/NewSearch';
import AddBook from '../actions/AddBook';

const MATCHING_ITEM_LIMIT = 8;

class UserBookSearch extends Component {

  constructor(props) {
      super(props);
      this.state = {
        books: [],
        showRemoveIcon: false,
        searchValue: '',
        selectedBooks: [],
        userId: '',
      };

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.addBook = this.addBook.bind(this);
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
    //const newBook = this.state.selectedBooks.concat(book);
    const userId = this.props.session.auth.userId;

    if(this._isMounted) {
      this.setState({
        selectedBooks: book,
      });
    }


    AddBook.addUserBook(userId, book, () => {
      this.setState({
        selectedBooks: book
      });
    });
    return console.log(book)
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
        <div className='col-3 my-4'
        key={idx}
        onClick={() => this.addBook(book)}
        >
          <div className='card'>
            <div className='card-title'>
              <h3 ><a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a></h3>
            </div>
            <div className='card-authors'>
              <h4>{book.volumeInfo.authors}</h4>
            </div>
            <div className='scroll-box'>
              <p>{book.volumeInfo.description}</p><br></br>
            </div>
          <button type='submit'>Add to your library</button>
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

const mapStateToProps = state => {
  return {
    session: state.session,
    selectedBooks: state.selectedBooks,
  }
}

export default connect(mapStateToProps)(UserBookSearch);
