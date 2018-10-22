import { connect } from 'react-redux';
import { newSearch } from '../actions/NewSearch';
import { fromJS } from 'immutable';
import Search from '../components/Search';

const actions = {
  getBooks: (value) => getBooks(value)
}

const mapStateToProps = (state) => {
  const search = state.search
  console.log('cannot .get from undefined')
  return {

    books: search.get('books', fromJS([])),
    query: search.get('query', '')
  }
}

export default connect(mapStateToProps, actions)(Search);
