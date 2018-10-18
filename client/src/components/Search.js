import React from 'react';
import PropTypes from 'prop-types';
import { getBooks } from '../actions/Search';
import { isEmpty } from 'immutable';
import { Books } from '../containers/Books';



export const Search = (props) => {
  debugger
  const { getBooks, books, query } = props





  return (
    <div className='wrapper'>
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Books Search API</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            My favorite books lists
          </div>
          <div className='col-md-8'>
            <div className='form-group'>
              <input type='text' className='form-control' id='search' placeholder='Search for a book'
                value={query} onChange={({target}) => getBooks(target.value)} />
            </div>
            <div>
        
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Search.propTypes = {
  getBooks: PropTypes.func,
  books: PropTypes.any,
  query: PropTypes.string
}

export default Search
