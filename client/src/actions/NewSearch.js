//import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';


function search(query, cb) {
  //debugger
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
    //dataType: "json",
    //accept: 'application/json',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function(response) {
      console.log(response)
    }
  })

  //.then(checkStatus)
  .then(parseJSON)
  //.then(console.log(response))
  .then((responseJson) => {
    console.log(responseJson.items);
    return responseJson.items;
    //this.setState({ books: responseJson.items})
  })
  .then(cb);
}

//checkStatus currently does not work
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.items;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
  //return console.log(response.json())
}

const NewSearch = { search };
export default NewSearch;
