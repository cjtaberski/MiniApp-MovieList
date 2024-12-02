const knex = require("knex")(require("./knexfile.js")["development"]);

async function getMovieTitles() {
    const movieTitles = await knex('movie_table').select('title')
    return movieTitles;
}

async function addMovie(title) {
    const newMovie = await knex('movie_table')
    .insert({ title })
    .returning(["id", "title"])
    return newMovie;
}

async function updateMovie(movieId, newTitle) {
    const updatedMovie = await knex('movie_table').where("id", movieId).update("title", newTitle).returning(["id", "title"])
    return updatedMovie
}

async function deleteMovie(movieId) {
    const deletedMovie = await knex('movie_table').where("id", movieId).returning(["id", "title"]).del()
    return deletedMovie;
}
module.exports = {getMovieTitles, addMovie, updateMovie, deleteMovie}