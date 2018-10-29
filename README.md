# MyLibrary

<iframe src="https://giphy.com/embed/X9F6l32sBNDpFWQB3n" width="480" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/X9F6l32sBNDpFWQB3n">via GIPHY</a></p>

## Thanks for checking out MyLibrary.
MyLibrary is a web app that can be used for searching books. You can navigate to the 'Home' tab in the top left. From this page, using the Google Books API you can search for books retrieving several information fields and links. The user can then add book selections to a shortened list which renders below the closest matching search results.

At present, this app has limited functionality and is a work in progress. The intent is to have those book selections add to a database that is controlled by the user. A user can be part of book club and include books from their library as recommended readings or within book discussions.

This app was built using Ruby on Rails, sqLite3, and React.

## Experience MyLibrary
In order to get this running on a local machine, clone this repo using your terminal:

`git clone git@github.com:e-be-walk/my-library.git`

Then run, `bundle install && cd client && npm install` . These commands will install the Ruby Gems, navigate to the React App, and install the packages to run the app. Now, get back to the main app by running `cd ..` and then `rails db:migrate` to migrate the database.

## Start using MyLibrary
MyLibrary was built using foreman which allows your machine to run both a rails and react server at the same time. You can start this up with the shortcut I've create by running `rake start`.

Thanks for checking this out! I look forward to building on to this and giving greater user functionality soon.

### Contributing
All bug reports and pull requests are more than welcome on Github at https://github.com/e-be-walk/my-library This project is intended to be space that promotes collaboration. Contributors are expected to adhere to standard codes of conduct.

## License
Copyright (c) 2018 Erin Walker. All software is available as open source under the terms of the MIT License. See LICENSE file.
