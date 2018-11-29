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
  .then(response => response.json())
  .then(response => {
    console.log("Book Search Results:", response.items);
    return response.items;
  })
  .then(cb);
}
