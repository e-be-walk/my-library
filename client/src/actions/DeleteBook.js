import { connect } from 'react-redux';

function deleteUserBook(userId, book) {
  console.log('DELETE', userId, book)

  fetch(`http://localhost:3001/users/${userId}/books/${book.id}`, {
    method: 'delete',
    body: JSON.stringify({
        id: book.id
   }),
    headers: {
      'Content-Type': 'application/json'
    },

  })
  .then( response => {
    return response;
    })
}

const DeleteBook = { deleteUserBook };
export default DeleteBook;
