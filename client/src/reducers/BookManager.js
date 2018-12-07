export default function bookManager(
  state = {
    loading: false,
    selectedBooks: [],
  },
  action)

  {
    switch(action.type){

      case "LOADING_BOOKS":
       return {...state, loading: true}
      case "USER_BOOKS":
       return {...state, loading: false, selectedBooks: action.selectedBooks }
      case "ADDING_BOOK":
        return {...state, loading: false}
      case "SAVED_BOOK":
        return {selectedBooks: [...state.selectedBooks, action.book], loading: false}
      case "DELETING_BOOK":
        return {...state, loading: true}
      case "DELETED":
        return {...state, loading: false, selectedBooks: state.selectedBooks.filter(book => book.id !== action.payload.id)}
      default:
        return state
    }
  }
