import React from 'react';
import React, { PropTypes } from 'react';

export const Search = (props) => {
  const { getBooks, books, query } = props
  const mappedBooks = !books.isEmpty() ? books.map((book, index) => {
    const id = book.get('id')
    const title = book.getIn(['volumeInfo', 'title'])
    const authors = book.getIn(['volumeInfo', 'authors'])
    const image = book.getIn(['volumeInfo', 'imageLinks', 'thumbnail'])
    const link = book.getIn(['volumeInfo', 'previewLink'])

    //authors can have more than one and is output as an array- need map to handle
    const mappedAuthors = authors ? authors.map((author, i) => {
      return <span key={i}>{author} </span>
    }) : null

    return (
      <div key={index} className='book-query'>
        <div className='row'>
          <div className='col-md-4'>
            <a href={link}><img src={image} alt={title}></a>
          </div>
        <div className='col-md-8'>
          <h2 className='title'>{title}</h2>
          <div>{mappedAuthors}</div>
          //<div> will need to show buttons for adding book to library, upvote, etc.
        </div>
      </div>
    </div>
    )
  }) : <h2>No books were found</h2>

  return (
    <div className='search-box'>
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Search: </h1>
            <div className='form-group'>
              <input type='text' className='form-control' id='search' placeholder='Search for a book'
                value={query} onChange={({target}) => getBooks(target.value)} />
            </div>
          </div>
          <div>
            {mappedBooks}
          </div>
        </div>
      </section>
    </div>
  )
}

Search.PropTypes = {
  getBooks: PropTypes.func,
  book: PropTypes.any,
  query: PropTypes.string
}

export default Search;
