let express = require('express');
let server = express();
let cors = require('cors');
const { getMovieTitles, addMovie, updateMovie } = require('./controllers.js');
const { deleteMovie } = require('./controllers.js');

let port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('This server is up and running!')
})

server.get('/movies', (req, res) => {
    getMovieTitles()
    .then((data) => {
        console.log(data)
        res.send(data);
    })
})

server.post('/movies', (req, res) => {
    const { title } = req.body;
    addMovie(title)
    .then(data => {
        console.log(data);
        res.json(data);
    })
})

server.put('/movies/:movieId', (req, res) => {
    let movieId = parseInt(req.params.movieId);
    console.log(movieId);
    let {newTitle} = req.body;
    updateMovie(movieId, newTitle)
    .then(data => {
        console.log(data);
        res.send(data)
    })
})

server.delete('/movies/:movieId', (req, res) => {
    let movieId = parseInt(req.params.movieId);
    deleteMovie(movieId)
    .then(data => {
        console.log(`Movie with an id of ${data[0].id} and title of ${data[0].title} has been deleted successfully`)
        res.send(data);
    })
})

server.listen(port, () => console.log(`Server listening at port ${port}`))