import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { apiKey } from '../auth/apiKey';

export function newSearch(query){
  const searchTerm = query
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

  return function(dispatch){
    dispatch({ type: 'SEARCHING...'});

    return fetch(`${BASE_URL}+${searchTerm}`)
      //method: "post",
      //headers: {
      //  'content-Type': 'application/json'
      //},
      //body: JSON.stringify(searchTerm)
    //})
    .then(response => response.json())
    .then(console.log(searchTerm))
    //.then(query =>
      //dispatch({ type: 'SEARCHING...', query: query})
    //);
  };
}
