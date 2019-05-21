const ads = [];

const newAd1 = {
  id: 1,
  email: 'chris@gmail.com',
  createdOn: '01/01/2019',
  manufacturer: 'Toyota',
  model: '2019 Toyota camry',
  price: 40000,
  state: 'new',
  status: 'available',
};

const newAd2 = {
  id: 2,
  email: 'chris@gmail.com',
  createdOn: '01/01/2019',
  manufacturer: 'Chevrolet',
  model: '2019 Chevrolet Silverado',
  price: 40000,
  state: 'used',
  status: 'available',
};

ads.push(newAd1, newAd2);
export default ads;
