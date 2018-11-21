export function fetchUserBooks(userId){
  console.log(userId)

  return (dispatch) => {
    dispatch({type: 'LOADING_BOOKS'})

  return fetch(`http://localhost:3001/users/${userId}/books`, {
    method: 'get',
    body: JSON.stringify({
      books: []
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response =>
  //{
  //   console.log("User Books:", response)
    dispatch({ type: 'USER_BOOKS', selectedBooks: response})
    //this.setState({
    //  selectedBooks: response
    //  })
    )
  }
}
