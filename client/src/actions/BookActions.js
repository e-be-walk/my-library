
export const fetchUserBooks = (userId) => {
  console.log(userId)
  // debugger
  return (dispatch) => {
    dispatch({type: 'LOADING_BOOKS'})

  return fetch(`http://localhost:3001/users/${userId}/books`, {
    method: 'get',
    // body: JSON.stringify({
    //   selectedBooks: []
    // }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    console.log("User Books:", response)
    dispatch({ type: 'USER_BOOKS', selectedBooks: response})
  })
   //})
    //)
  }
}

export const addUserBook = (userId, book) => {

  console.log(userId, book)
  //debugger

  return (dispatch) => {
  dispatch({type: 'ADDING_BOOK'});
  return fetch(`http://localhost:3001/users/${userId}/books`, {
    method: 'post',
    body: JSON.stringify({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        link: book.volumeInfo.previewLink,
   }),
    headers: {
      'Content-Type': 'application/json'
    },

  })
  //.then(response => response.json)
  //.then((responseJson) => {
    //console.log(responseJson);
  //})
  //.then(book);
  .then(response => response.json())
  .then(data => {
    console.log('book', data)
    dispatch({ type: 'SAVED_BOOK', book: data})
  })
  }
}

export const deleteUserBook = (userId, book) => {
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
