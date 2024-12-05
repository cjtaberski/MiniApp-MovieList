import { useState, useEffect, useContext, createContext } from 'react';
import { MovieContext } from './App.jsx';
import MovieComponent from './movieComponent.jsx'

export let FilmContext = createContext({film: {}})

function MovieList() {

    let { movieData, search } = useContext(MovieContext);
     
    function filterMovies(search) {
        return movieData.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
    }

    return !search ? (
        <ul>
            { movieData.map(movie => (<FilmContext.Provider value={{movie}}><MovieComponent movie={movie}/></FilmContext.Provider>))}
        </ul>
    ) : (
        <ul>
            {filterMovies( search).map(movie => (<li>{movie.title}</li>))}
        </ul>
    )
}

export default MovieList