import { fromJS } from 'immutable';

export default function searchManager(
  state = {
    loading: false,
    books: [],
  },
  action)
  {
    switch(action.type){
      case "SEARCHING...":
        return {...state, loading: true}
      case "SET_BOOKS":
        const books = (state, { payload: books })  => {
          return state.set('books', fromJS(books))
        }
    default:
      return state
    }
  }
