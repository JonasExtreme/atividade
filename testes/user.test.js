const { addUser, getUser, countActiveUsers } = require('./user');

test('adicionar um usuário', () => {
  const user = { id: 1, name: 'Alice', active: true };
  addUser(user);
  expect(getUser(1)).toEqual(user);
});

test('recuperar corretamente as informações do usuário', () => {
  const user = { id: 2, name: 'Bob', active: false };
  addUser(user);
  expect(getUser(2)).toEqual(user);
});

test('verificar se o número total de usuários ativos é atualizado corretamente', () => {
  const user1 = { id: 3, name: 'Charlie', active: true };
  const user2 = { id: 4, name: 'David', active: false };
  addUser(user1);
  addUser(user2);
  expect(countActiveUsers()).toBe(2);
});