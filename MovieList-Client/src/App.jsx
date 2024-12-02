import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  let [ movieList, setMovieList ] = useState([])
  let [movieData, setMovieData ] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get('http://127.0.0.1:3000/movies')
      const data = await response.json();
      setMovieData(data)
      console.log(movieData)
      // .then(data => {
      //   setMovieList(data)
      //   console.log(movieList)
      // })
    }
    getMovies();
  }, [])

  return (
    <>
      <div>This is my website</div>
    </>
  )
}

export default App