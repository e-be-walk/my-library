export function login(user){
  const userObject = { user: user }

  return function(dispatch){
    dispatch({ type: 'LOGGING_IN'});

    return fetch('http://localhost:3001/sessions', {
      method: "post",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    })
    .then(response => response.json())
    .then(console.log(userObject))
    .then(user =>
      dispatch({ type: 'LOGGED_IN', user: user })
    );
  };
}
