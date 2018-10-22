import { connect } from 'react-redux';
import { getBooks } from '../actions/Search';
import { fromJS } from 'immutable';
import Search from '../components/Search';

const actions = {
  getBooks: (value) => getBooks(value)
}

const mapStateToProps = (state) => {
  const search = state.search
  console.log('cannot .get from undefined')
  return {

    //books: search.get('books', fromJS([])),
    //query: search.get('query', '')
  }
}

export default connect(mapStateToProps, actions)(Search);
