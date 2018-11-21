export function deleteUserBook(userId, book) {
  console.log('DELETE', userId, book)

  return (dispatch) =>{
    dispatch({type: 'DELETING_BOOK'});

  return fetch(`http://localhost:3001/users/${userId}/books/${book.id}`, {
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
    .then(data => {
      console.log('deleted')
      dispatch({ type: 'DELETED'})
    })
  }
}
