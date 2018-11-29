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
        // const selectedBooks = action.selectedBooks.map(book => book);
       return {...state, loading: false, selectedBooks: action.selectedBooks }
      case "ADDING_BOOK":
        return {...state, loading: false}
      case "SAVED_BOOK":
        return {selectedBooks: [...state.selectedBooks, action.book], loading: false}
      case "DELETING_BOOK":
        return {selectedBooks: action.book, loading: true}
      case "DELETED":
        // let newBookList = state.selectedBooks.slice()
        // return {...state, selectedBooks: newBookList.filter(b => newBookList.indexOf(b) !== action.index), loading: false}
        return {...state, loading: false}
      default:
        return state
    }
  }
