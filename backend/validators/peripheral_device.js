const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const post = {
  [Segments.BODY]: Joi.object().keys({
    vendor: Joi.string().required(),
    status: Joi.string().valid('online', 'offline').required(),
    gateway: Joi.objectId().required(),
  }),
};

const remove = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.objectId().required(),
  }),
};

const update = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.objectId().required(),
  }),
  [Segments.BODY]: Joi.object().keys({
    vendor: Joi.string().required(),
    status: Joi.string().valid('online', 'offline').required(),
    gateway: Joi.objectId().required(),
  }),
};

const get = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.objectId().required(),
  }),
};

module.exports = {
  postValidator: post,
  removeValidator: remove,
  updateValidator: update,
  getValidator: get,
};
