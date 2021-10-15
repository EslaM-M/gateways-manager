var express = require('express');
const { celebrate } = require('celebrate');

var router = express.Router();

const {
  get,
  post,
  remove,
  update,
} = require('../controllers/peripheral_device');
const {
  postValidator,
  getValidator,
  removeValidator,
  updateValidator,
} = require('../validators/peripheral_device');

/* GET users listing. */
router.get('/:id', celebrate(getValidator), get);
router.delete('/:id', celebrate(removeValidator), remove);
router.put('/:id', celebrate(updateValidator), update);

/* GET users listing. */
router.post('/', celebrate(postValidator), post);

module.exports = router;
