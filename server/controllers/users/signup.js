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
  if (!req.body.length > 0) {
    res.status(403).json({
      status: 403,
      error: 'sorry, you can not send an empty info!',
    });
    return;
  }

  const hash = bcrypt.hashSync(req.body.password.trim(), 10);

  const id = parseInt(users.length + 1, 10);
  const newUser = {
    id,
    email: req.body.email.trim(),
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    password: hash,
    address: req.body.address.trim(),
    isAdmin: req.body.isAdmin,
  };
  users.push(newUser);

  const payload = {
    email: newUser.email,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    password: newUser.password,
    address: newUser.address,
    isAdmin: newUser.isAdmin,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24hrs' });

  res.status(201).json({
    status: 201,
    data: {
      token,
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    },
  });
};

export default signup;
