

function addUserBook(userId, newBook) {
  console.log(userId, newBook)

  fetch(`http://localhost:3001/users/${userId}/books`, {
    method: 'post',
    body: JSON.stringify({
      newBook
      //[{
      //  id: this.newBook.id,
      //  title: newBook.volumeInfo.title,
      //  authors: newBook.volumeInfo.authors,
      //  description: newBook.volumeInfo.description,
      //  link: newBook.volumeInfo.previewLink,
     //}]
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
  .then(newBook);
}

function parseJSON(response) {
  return response.json();
}


const AddBook = { addUserBook };
export default AddBook;
