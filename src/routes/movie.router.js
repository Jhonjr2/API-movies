const { getAll, create, getOne, remove, update, setMovieGender, setMovieActor, setMovieDirector } = require('../controllers/movie.controller');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(getAll)
    .post(create);

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRouter.route('/movies/:id/genders')
    .post(setMovieGender)

movieRouter.route('/movies/:id/actors')
    .post(setMovieActor)

movieRouter.route('/movies/:id/directors')
    .post(setMovieDirector)

module.exports = movieRouter;