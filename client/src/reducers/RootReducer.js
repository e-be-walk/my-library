import{ combineReducers } from 'redux';
import SessionManager from './SessionManager';
import SearchManager from './SearchManager';

const rootReducer = combineReducers({
  session: SessionManager,
  search: SearchManager
});

export default rootReducer;
