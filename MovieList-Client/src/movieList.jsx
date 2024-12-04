import { useState, useEffect, useContext } from 'react';
import { MovieContext } from './App.jsx';

function MovieList() {

    let [ movies, setMovies ] = useState([]);
    let { movieData, search } = useContext(MovieContext);
    
    useEffect(() => {
        setMovies(movieData);
    }, [])
     
    function filterMovies(movies, search) {
        return movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (!search) {
        return (
            <ul>
              <li>Line by line foo</li>
              { movies.map((movie) =>
                (<li>{movie.title}</li>)
              )}
            </ul>
            )
    } else {
        return (
            <ul>
                {filterMovies(movies, search).map(movie => (<li>{movie.title}</li>))}
            </ul>
        )
    }
}

export default MovieList