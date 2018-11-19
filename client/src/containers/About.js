import React, { Component } from 'react';

export default function about() {
    return(
        <div className="about container">
        <h2>Hi! </h2>
        <h3>Thanks for checking out MyLibrary.</h3>
        <p>MyLibrary is a web app that can be used for searching books. Any one can see how the app works- navigate to the 'Home' tab in the top left. From this page, using the Google Books API you can search for books retrieving several information fields and links. The user can then add book selections to a shortened list which renders below the closest matching search results.
        <br></br>
        <br></br>
        If you want to, you can create and log-in as a user which will enable you to add and remove books from your own personal library. Eventually I would like to incorporate a way for users to interact with one another via a shared book club. <br></br>
        <br></br>
        This app was built using Ruby on Rails, sqLite3, and React. To find out more about this app, check out the <a href="https://github.com/e-be-walk/my-library" target='blank'>repo.</a>
        <br></br>
        <br></br>
        </p>
        </div>
      )
    }
