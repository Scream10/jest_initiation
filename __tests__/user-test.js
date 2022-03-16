jest.mock('../__mocks__/request.js');

import * as user from '../src/api/user';

it('get user informations from API works', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});