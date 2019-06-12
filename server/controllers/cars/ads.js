/* eslint-disable object-curly-newline */
import moment from 'moment';
import ads from '../../models/ads';
import users from '../../models/users';
import validateAd from '../../helpers/ads';

const Ads = (req, res) => {
  const { error } = validateAd.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }

  const id = parseInt(ads.length + 1, 10);
  const { email, manufacturer, model, price, state, status } = req.body;
  const newUser = { id, email, manufacturer, model, price, state, status };
  const user = users.find(e => e.email === email);
  if (!user) {
    return res.status(404).json({
      status: 404,
      error: 'User not found',
    });
  }

  ads.push(newUser);
  return res.status(201).json({
    status: 201,
    data: {
      id,
      createdOn: moment().format('LL'),
      email,
      manufacturer,
      model,
      price,
      state,
      status,
    },
  });
};

export default Ads;
