
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
      case "SEARCH_RESULTS":
        return {...state, loading: false}
      default:
        return state
    }
  }
