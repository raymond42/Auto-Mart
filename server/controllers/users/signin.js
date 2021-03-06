import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import users from '../../models/users';
import validateUserSignin from '../../helpers/signin';

dotenv.config();

const signin = (req, res) => {
  const { email, password } = req.body;
  // Validate user inputs
  const { error } = validateUserSignin.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }

  // Check if the entered email exists
  const user = users.find(e => e.email === email);
  //   if user doesn't exist
  if (!user) {
    return res.status(404).json({
      status: 404,
      message: 'User not found',
    });
  }

  // Check if the entered password is correct
  const comparePassword = bcrypt.compareSync(password.trim(), user.password);
  //   if password is Incorrect
  if (!comparePassword) {
    return res.status(400).json({
      status: 400,
      error: 'Incorrect password',
    });
  }

  // if everything is correct
  // generate token
  const payload = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    isAdmin: user.isAdmin,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24hrs' });

  return res.status(200).json({
    status: 200,
    data: {
      token,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
};

export default signin;
