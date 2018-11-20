import fetch from 'isomorphic-fetch';


export function newSearch(query, cb) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function(response) {
      console.log(response)
    }
  })
  .then(parseJSON)
  .then((responseJson) => {
    console.log(responseJson.items);
    return responseJson.items;
  })
  .then(cb);
}

function parseJSON(response) {
  return response.json();
}
