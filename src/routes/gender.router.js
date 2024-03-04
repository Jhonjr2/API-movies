const { getAll, create, getOne, remove, update } = require('../controllers/gender.controller');
const express = require('express');

const genderRouter = express.Router();

genderRouter.route('/gender')
    .get(getAll)
    .post(create);

genderRouter.route('/gender/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genderRouter;