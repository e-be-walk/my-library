

function addUserBook(userId, book) {
  console.log(userId, book)

  fetch(`http://localhost:3001/users/${userId}/books`, {
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
  .then(parseJSON)
  .then((responseJson) => {
    console.log(responseJson);
    //return responseJson.items;
  })
  .then(book);
}

function parseJSON(response) {
  return response.json();
}

const AddBook = { addUserBook };
export default AddBook;
