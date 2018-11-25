export default function bookManager(
  state = {
    loading: false,
    selectedBooks: {id: null, title: null},
  },
  action)

  {
    switch(action.type){
      // Need to remove componentDidMount segment of user library to fetch in BookActions
      // then map through user books in dispatch USER_BOOKS
      case "LOADING_BOOKS":
       return {...state, loading: true}
      case "USER_BOOKS":
       return {...state, loading: false}
      //return {loading: false, selectedBooks: action.payload }
      case "ADDING_BOOK":
        return {...state, loading: false}
      case "SAVED_BOOK":
        return {selectedBooks: {id: action.book.id, title: action.book.title}, loading: false}
      case "DELETING_BOOK":
        return {...state, loading: true}
      case "DELETED":
        return {...state, loading: false}
      default:
        return state
    }
  }
