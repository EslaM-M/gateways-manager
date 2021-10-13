var express = require('express');
var router = express.Router();

const { celebrate } = require('celebrate');

const { get, post } = require('../controllers/gateway');

const { postValidator } = require('../validators/gateway');
/* GET users listing. */
router.get('/', get);

/* GET users listing. */
router.post('/', celebrate(postValidator), post);

module.exports = router;
