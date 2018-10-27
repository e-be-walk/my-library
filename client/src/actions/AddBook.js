function addUserBook(){
  console.log(this.state.userId, this.state.bookId)

  fetch(`/users/${this.state.userId}/books`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      selectedBooks: [],
      userId: [],
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
  })
}

const AddBook = { addUserBook };
export default AddBook;
