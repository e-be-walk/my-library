import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'immutable';
import { getBooks, books, query } from '../actions/Search';



export const Search = (props) => {
  const { getBooks, books, query } = props
  const mappedBooks = books.map((book, index) => {
  const id = book.get('id')
  const title = book.getIn(['volumeInfo', 'title'])
  const authors = book.getIn(['volumeInfo', 'authors'])
  const image = book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])
  const link = book.getIn(['volumeInfo', 'previewLink'])
  const mappedAuthors = authors ? authors.map((author, i) => {
    return <span key={i}>{author} </span>
  }) : null


  return (
       <div className='row'>
         <div className='col-md-4'>
           <a href={link}><img src={image} alt={title} /></a>
         </div>
         <div className='col-md-8'>
           <h2 className='title'>{title}</h2>
           <div>{mappedAuthors}</div>
         </div>
       </div>
   )
 })

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
             {mappedBooks}
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
