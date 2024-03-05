const { getAll, create, getOne, remove, update } = require('../controllers/gender.controller');
const express = require('express');

const genderRouter = express.Router();

genderRouter.route('/genders')
    .get(getAll)
    .post(create);

genderRouter.route('/genders/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genderRouter;