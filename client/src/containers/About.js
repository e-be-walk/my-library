import React, { Component } from 'react';

class About extends Component {

  render() {
    return(
        <div className="about container">
        <h2>Hi! </h2>
        <h3>Thanks for checking out MyLibrary.</h3>
        <p>MyLibrary is a web app that can be used for searching books. You can navigate to the 'Home' tab in the top left. From this page, using the Google Books API you can search for books retrieving several information fields and links. The user can then add book selections to a shortened list which renders below the closest matching search results.
        <br></br>
        <br></br>
        At present, this app has limited functionality and is a work in progress. The intent is to have those book selections add to a database that is controlled by the user. A user can be part of book club and include books from their library as recommended readings or within book discussions.
        <br></br>
        <br></br>
        This app was built using Ruby on Rails, sqLite3, and React. To find out more about this app, check out the <a href="https://github.com/e-be-walk/my-library" target='blank'>repo.</a>
        <br></br>
        <br></br>
        </p>
        </div>
      )
    }
  }


  export default About;
