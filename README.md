# Welcome to Github Explorer

A simple and intuitive interface to search and view information
about users, their public repositories and repositories they
starred.

The main objective of this project is to practice some dev
skills throught some technologies and concepts:

- ReactJS
- React Router
- React Bootstrap
- Mocha: testing library.
- SEO and Web Semantic: use of tags that emphasizes the semantic of each part of the pages.
- Usability
- Clean Code
- SOLID
- KISS: “Keep It Simple, Stupid!”.
- YAGNI: “You aren’t gonna need it”.
- DRY: “Do not Repeat Yourself”.

## Functionalities purposed

Provide a search field to search Github user informations and a
place to show them. Provide a button to search for the user
repositories, a button to search for the repositories the user
starred and a place to show these. To do this, some endpoints
from Github API was consumed:

- User informations: [https://api.github.com/users/USER_GITHUB](https://api.github.com/users/USER_GITHUB)
- User repositories: [https://api.github.com/users/USER_GITHUB/repos](https://api.github.com/users/USER_GITHUB/repos)
- Repositories the user starred: [https://api.github.com/users/USER_GITHUB/starred](https://api.github.com/users/USER_GITHUB/starred)

## To run the project on your machine

- `git clone https://github.com/victorreis/github-explorer-react`
- `cd github-explorer-react`
- `npm install`
- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
