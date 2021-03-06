import Joi from 'joi';

const validateAd = {

  validation(newAd) {
    const newAdSchema = {
      email: Joi.string().email().required(),
      manufacturer: Joi.string().required(),
      model: Joi.string().required(),
      price: Joi.number().required(),
      state: Joi.string().valid('new', 'used').required(),
      status: Joi.string().valid('available').required(),
    };
    return Joi.validate(newAd, newAdSchema);
  },

};

export default validateAd;
