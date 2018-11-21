export default function bookManager(
  state = {
    loading: false,
    books: [],
    selectedBooks: [],
  },
  action)

  {
    switch(action.type){
      // case "LOADING_BOOKS":
      //   return {...state, loading: true}
      // case "USER_BOOKS":
      //   return {loading: false, books: [...state.selectedBooks, action.payload]}
      case "ADDING_BOOK":
        if (action.payload.id && action.payload.title) {
          return {loading: false, books: [this.state.book, action.payload]}
        } else {
          return state;
        }
        //return {...state, loading: true}
      case "SAVED_BOOK":
        return {selectedBooks: action.book.id, loading: false}
      case "DELETING_BOOK":
        return {...state, loading: true}
      case "DELETED":
        return {...state, loading: false}
      default:
        return state
    }
  }
