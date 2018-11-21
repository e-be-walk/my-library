export default function bookManager(
  state = {
    loading: false,
    books: [],
  },
  action)

  {
    switch(action.type){
      case "LOADING_BOOKS":
        return {...state, loading: true}
      case "ADDING_BOOK":
        return {...state, loading: true}
      case "SAVED_BOOK":
        return {...state, loading: false}
      default:
        return state
    }
  }
