export function addUserBook(userId, book) {

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
