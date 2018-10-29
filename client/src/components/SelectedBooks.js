import React from 'react';

export default function SelectedBooks(props) {
  const { books } = props;

  const bookRows = books.map((book, idx) =>(
      <div className='col-3 my-4'
      key={idx}
      onClick={() => props.onBookClick(book)}
      >
        <div className='card'>
          <div className='card-title'>
            <h3><a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a></h3>
          </div>
          <div className='card-authors'>
            <h4>{book.volumeInfo.authors}</h4>
          </div>
          <div className='scroll-box'>
            <p>{book.volumeInfo.description}</p><br></br>
          </div>
        
        </div>
      </div>
  ));

  return (
    <div id='book-search'>

              <div className='my-4'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h2>Selected Books</h2>
                  </div>
                </div>
              </div>

        <div>
          <div className='row'>
            {bookRows}
          </div>
        </div>
      </div>
)
}
