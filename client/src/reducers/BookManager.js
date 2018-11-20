export default function bookManager(
  state = {
    loading: false,
    books: [],
  },
  action)

  {
    switch(action.type){
      case "ADDING_BOOK":
        return {...state, loading: true}
      default:
        return state
    }
  }
