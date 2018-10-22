import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';

export const SET_BOOKS = 'SET_BOOKS'
export const SET_QUERY = 'SET_QUERY'

export function setBooks (value) {
  return {
    type: SET_BOOKS,
    payload: value
  }
}

export function setQuery (query) {
  return {
    type: SET_QUERY,
    payload: query
  }
}

export function newSearch(query){
  const searchTerm = query
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

  return (dispatch, getState) => {
    dispatch(setQuery(query))
    //debugger
    fetch(`${BASE_URL}+${searchTerm}`, {mode: 'cors'})

    .then((response) => {
      //return response.json()
      return response.text();
    })
    .then(function(text) {
      console.log('Request successful', text);
    });

    //.then(console.log(searchTerm))
    //.then(response => response.json())
    //.then(console.log(response))
    //.then(books =>
    //  dispatch({ type: 'SET_BOOKS', payload: books})
    //);

  }
}

const ACTION_HANDLERS = {
  [SET_BOOKS]: (state, {payload: books}) => {
    return state.set('books', fromJS(books))
  },
  [SET_QUERY]: (state, {payload: query}) => {
    return state.set('query', fromJS(query))
  }
}

const initialState = fromJS({})
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler? handler(state,action) : state
}
