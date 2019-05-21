const users = [];

const user1 = {
  id: 1,
  email: 'admin@gmail.com',
  firstName: 'Raymond',
  lastName: 'Gakwaya',
  password: 'Asdfg1',
  address: 'Rwanda',
  isAdmin: 'true',
};
const user2 = {
  id: 2,
  email: 'chris@gmail.com',
  firstName: 'Christian',
  lastName: 'Habineza',
  password: 'Asdfg1',
  address: 'Rwanda',
  isAdmin: 'false',
};
users.push(user2, user1);
export default users;
