const express = require('express');
const actorRouter = require('./actor.router');
const directorRouter = require('./director.router');
const genderRouter = require('./gender.router');
const movieRouter = require('./movie.router');
const router = express.Router();

router.use(actorRouter)
router.use(directorRouter)
router.use(genderRouter)
router.use(movieRouter)

module.exports = router;