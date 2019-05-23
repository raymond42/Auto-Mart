const cars = [];

const car1 = {
  id: 1,
  owner: 1,
  createdOn: '01/01/2019',
  state: 'used',
  status: 'available',
  price: 40000,
  manufacturer: 'Toyota',
  model: '2019 Toyota camry',
  body_type: 'car',
};

const car2 = {
  id: 2,
  owner: 2,
  createdOn: '01/01/2019',
  state: 'used',
  status: 'sold',
  price: 45000,
  manufacturer: 'Chevrolet',
  model: '2019 Chevrolet Silverado',
  body_type: 'car',
};

cars.push(car1, car2);
export default cars;
