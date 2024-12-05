import { useState, useEffect, useContext } from 'react';
import { FilmContext } from './movieList.jsx';
import axios from 'axios';

function MovieComponent() {

    let { movie } = useContext(FilmContext);

    let [ movieDeleted, setMovieDeleted ] = useState(false)
    function handleDeleteMovie() {
        axios.delete(`http://localhost:3000/movies/${movie.id}`)
        .then((res) => {
            console.log(res.data);
            console.log(movie.title + ' was deleted!');
            setMovieDeleted(true);
        })
    }

    return (
        <li>{movie.title}<span><button type="Submit" onClick={() => handleDeleteMovie()}>Delete</button></span></li>
    )
}

export default MovieComponent