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

    default:
      return state
    }
  }
