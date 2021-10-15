var express = require('express');
const { celebrate } = require('celebrate');

var router = express.Router();

const {
  get,
  post,
  remove,
  update,
} = require('../controllers/peripheral_device');
const { postValidator } = require('../validators/peripheral_device');

/* GET users listing. */
router.get('/:id', get);
router.delete('/:id', remove);
router.put('/:id', update);

/* GET users listing. */
router.post('/', celebrate(postValidator), post);

module.exports = router;
