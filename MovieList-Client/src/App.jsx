import React, { useState, useEffect, useRef, createContext } from 'react';
import axios from 'axios';
import './App.css'
import MovieList from './movieList.jsx'

export let MovieContext = createContext({movieList: [], searchQuery: ''})

function App() {

  let [movieData, setMovieData ] = useState([]);
  let [search, setSearch] = useState('');

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
      console.log(movieData)
    })

  }, [search])

  async function handleSearchRequest(query) {
    await setSearch(query);
  }

  if (!movieData) {
    return (<p>Loading Page....</p>)
  } else {
    return (
      <>
        <input type="search" placeholder="Search Movies" onChange={(event) => handleSearchRequest(event.target.value)}></input>
        <MovieContext.Provider value={{movieData, search}}>
          <MovieList />
        </MovieContext.Provider>
      </>
    )
  }
}

export default App