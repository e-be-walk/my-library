function deleteUserBook(book) {
  console.log(book)

  fetch(`http://localhost:3001/book/${book.id}`, {
    method: 'delete',
    body: JSON.stringify({
        id: book.id
   }),
    headers: {
      'Content-Type': 'application/json'
    },

  })
  .then(parseJSON)
  .then((responseJson) => {
    console.log(responseJson);
    //return responseJson.items;
  })
}

function parseJSON(response) {
  return response.json();
}

const DeleteBook = { deleteUserBook };
export default DeleteBook;
