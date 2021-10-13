const { Joi, Segments } = require('celebrate');

const post = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    ipAddress: Joi.string()
      .ip({ version: ['ipv4'] })
      .required(),
  }),
};

module.exports = {
  postValidator: post,
};
