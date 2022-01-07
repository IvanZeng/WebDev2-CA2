# Web App Dev 2: Web API

  Student Name: Qi Zeng
  Student Number: 20073975

## Features

...... A bullet-point list of the ADDITIONAL features have implemented in the API ......    

 + Feature 1 - get list of upcoming movies
 + Feature 2 - get list of nowplaying movies
 + Feature 3 - get list of toprated movies
 + Feature 4 - get list of popular movies
 + Feature 5 - get detailed information of upcoming movies
 + Feature 6 - get detailed information of nowplaying movies
 + Feature 7 - get detailed information of toprated movies
 + Feature 8 - get detailed information of popular movies
 + Feature 9 - get a list of popular actors
 + Feature 10 - get detailed information of popular actors
 + Feature 11 - get movie's reviews
 + Feature 12 - post user's reviews
 + Feature 13 - Connected to cloud MongoDB
 + Feature 14 - get list of similar movies by id
 + Feature 15 - Search movies by keyword.
 + Feature 16 - Authentication and protected routes.
 + Feature 17 - React App integration

## Installation Requirements
 
 + MongoDB 5.0

```bat
git clone https://github.com/IvanZeng/WebDev2-CA2.git
```

Installation NPM command in two terminals of two folders, movies-api and moviesApp folders

```bat
npm install
```

## API Configuration

creating an ``.env`` file. in 'movies-api' file.

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://ivan_zq:123h1232@cluster0.negot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
SEED_DB=True
SECRET=ilikecake
TMDB_KEY=5e9bbd197f571fbc08f6c69de7f52e54
```
By using 'npm start' launch the React app and should also open the users default browser to port: 3000.

By using 'npm start' launch the movies-api folder and should also open the users default browser to port: 8080.

## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies/tmdb/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/tmdb/:id |Get a movie by id | N/A | N/A | N/A
| /api/:id/similar|Get similar movie by id | N/A | N/A | N/A
| /api/movies/:id/images |Get a movie's images | N/A | N/A | N/A
| /api/movies/:id/reviews |Get a movie's reviews | Post a movie's reviews  | N/A | N/A
| /api/movies/upcoming |Gets a list of upcoming movies | N/A | N/A | N/A
| /api/movies/nowplaying |Gets a list of nowplaying movies | N/A | N/A | N/A
| /api/movies/popular |Gets a list of popular movies | N/A | N/A | N/A
| /api/movies/toprated |Gets a list of toprated movies | N/A | N/A | N/A
| /api/genres/|Get movie genres | N/A | N/A | N/A
| /api/users/ |Get all users |Register OR authenticate a user | Update a user | N/A
| /api/actors/ |Get all movies' reviews |  N/A | N/A | N/A
| /api/actors/:id |Get actor details |  N/A | N/A | N/A
| /api/actors/:id/images |Get all actor's images |  N/A | N/A | N/A
| ... | ... | ... | ... | ...

## Security and Authentication

+ Login page
  + User must log in and then be able to access the Movies App. The user must be already exist in the MongoDB
+ Signup page
  + Username has to be a unique string
  + Ensure all passwords are at least 5 characters long and contain at least one number and one letter
  + Repeat password must match password field

+ All users are saved to Cloud MongoDB after registered
+ All paths except for login and signup pages use private routes to be protected and require a user to get access.
+ User name exists on the site header
+ User can sign out

## Integrating with React App

The React moviesapp is integrated with API. 

Including:

+ Discover movies
+ Movie details
+ Movie genres
+ Movie images
+ Movie reviews
+ Upcoming movies
+ Nowplaying movies
+ Similar movies
+ Toprated movies
+ Popular movies
+ Discover actors

Here is an example of a tmdb method call inside the moviesapp (/src/api/tmdb-api.js). 

~~~Javascript
  export const getNowPlayingMovies = (args) => {
    return fetch(
      "/api/movies/nowplaying", 
      {headers: {
        "Authorization": window.localStorage.getItem("token")
      }
    }
    ).then(res=>res.json());
  };

  export const getPeople = (args) => {
   const [, idPart] = args.queryKey;
   const { id } = idPart;
   return fetch(
    `/api/actors/${id}`, 
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }
  }
   ).then((response) => {
     if (!response.ok) {
       throw new Error(response.json().message);
     }
     return response.json();
   })
   .catch((error) => {
     throw error
  });
 };
~~~

login/sign up API can use mongoDB user login

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};
~~~
