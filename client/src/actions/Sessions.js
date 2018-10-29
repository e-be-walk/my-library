export function signup(user){
  const userObject = { user: user }

    return function(dispatch){
      dispatch({ type: 'LOGGING_IN_NEW_USER'});

    return fetch('http://localhost:3001/sessions', {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    })
    //.then(response => response.json())
    .then(console.log(userObject))
    .then(user =>
      dispatch({ type: 'LOGGED_IN', user: user })
    )
  }
}

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
    //.then(console.log('session', userObject))
    .then(data => {
      console.log('user session', data)
      dispatch({ type: 'LOGGED_IN', user: data })
    }
    );
  };
}
