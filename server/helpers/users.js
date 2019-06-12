/* eslint-disable newline-per-chained-call */
import Joi from 'joi';


// signup
const validateUserSignup = {

  validation(newUser) {
    const newUserSchema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).trim().required(),
      firstName: Joi.string().min(3).trim().required(),
      lastName: Joi.string().min(3).trim().required(),
      password: Joi.string().min(6).max(12).trim().required(),
      address: Joi.string().trim().required(),
      isAdmin: Joi.boolean().required(),
    };
    return Joi.validate(newUser, newUserSchema);
  },

};

export default validateUserSignup;
