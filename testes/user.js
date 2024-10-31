const sum = require('./math');

let users = [];

function addUser(user) {
  users.push(user);
}

function getUser(id) {
  return users.find(user => user.id === id);
}

function countActiveUsers() {
  return users.reduce((total, user) => sum(total, user.active ? 1 : 0), 0);
}

module.exports = { addUser, getUser, countActiveUsers };