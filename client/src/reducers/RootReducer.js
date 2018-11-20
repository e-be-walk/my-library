import{ combineReducers } from 'redux';
import SessionManager from './SessionManager';
import SearchManager from './SearchManager';
import BookManager from './BookManager';

const rootReducer = combineReducers({
  session: SessionManager,
  searchResults: SearchManager,
  books: BookManager,
});

export default rootReducer;
