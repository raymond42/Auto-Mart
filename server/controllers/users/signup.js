/* eslint-disable object-curly-newline */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import users from '../../models/users';
import validateUserSignup from '../../helpers/users';

dotenv.config();

// signup
const signup = (req, res) => {
  const { error } = validateUserSignup.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }

  const user = users.find(e => e.email === req.body.email);
  if (user) {
    res.status(405).json({
      status: 405,
      error: 'The email is already registered',
    });
    return;
  }


  const id = parseInt(users.length + 1, 10);
  const { email, firstName, lastName, password, address, isAdmin } = req.body;
  bcrypt.hashSync(password.trim(), 10);

  users.push(req.body);

  const payload = {
    email,
    firstName,
    lastName,
    address,
    isAdmin,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24hrs' });

  res.status(201).json({
    status: 201,
    data: {
      token,
      id,
      firstName,
      lastName,
      email,
    },
  });
};

export default signup;
