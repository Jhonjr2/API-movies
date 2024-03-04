const Actor = require("./Actor");
const Director = require("./Director");
const Gender = require("./Gender");
const Movie = require("./Movie");

Movie.belongsToMany(Actor, {through: 'movie_actor'})
Actor.belongsToMany(Movie, {through: 'movie_actor'})

Movie.belongsToMany(Director, {through: 'movie_director'})
Director.belongsToMany(Movie, {through: 'movie_director'})

Movie.belongsToMany(Gender, {through: 'movie_genre'})
Gender.belongsToMany(Movie, {through: 'movie_genre'})

