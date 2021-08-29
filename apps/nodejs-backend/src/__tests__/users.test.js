const usersService = require('../services/users');

test('return a list with 4 users', () => {
    expect(usersService.getUsers().length).toBe(4);
});