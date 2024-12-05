import React, { useState, useEffect, useRef, createContext } from 'react';
import axios from 'axios';
import './App.css'
import MovieList from './movieList.jsx'

export let MovieContext = createContext({movieList: [], searchQuery: '', movieToAdd: ''})

function App() {

  let [movieData, setMovieData ] = useState([]);
  let [search, setSearch] = useState('');
  let [movieToAdd, setMovieToAdd ] = useState('');
  let movieAddInput;
  let movieDeleteInput;

  useEffect(() => {
    // async function getMovies() {
    //   const response = await axios.get('http://localhost:3000/movies')
    //   const data = response.data;
    //   setMovieData(data)
    //   console.log(movieData)
    // }
    // getMovies();
    axios.get('http://localhost:3000/movies')
    .then(response => { 
      setMovieData(response.data);
    })

  }, [search, movieToAdd])

  async function handleSearchRequest(query) {
    await setSearch(query);
  }

  function handleAddMovie(movieTitle) {
    console.log(movieTitle)
    if (movieTitle) {
      
      axios.post('http://localhost:3000/movies', { title: movieTitle })
        .then((res) => {
          setMovieToAdd(res.data.title)
          console.log(res);
          console.log(res.data);
        })
    }
  };

  function handleDeleteMovie(movieParams) {
    if (typeof movieParams === "number") {
      movieData.find(movie => {movie.id === movieParams
      })
    } else if (typeof movie === "string") {

    }
  }

  if (!movieData) {
    return (<p>Loading Page....</p>)
  } else {
    return (
      <>
      <header id="titleBar">
        <img id="logo" src="../public/largeReel.svg"></img>
        <h1>Movie Manager</h1>
      </header>
        <input type="search" placeholder="Search Movies" onChange={(event) => handleSearchRequest(event.target.value)}></input>
        <input type="text" placeholder="Movie Title" onChange={(event) => movieAddInput = event.target.value}></input>
        <button type="submit" onClick={() => handleAddMovie(movieAddInput)}>Add Movie</button>
        <MovieContext.Provider value={{movieData, search, movieToAdd}}>
          <MovieList />
        </MovieContext.Provider>
      </>
    )
  }
}

export default App