import request from '../../__mocks__/request';

export const getUserName = async (userID: number) => {
  return await request(`/users/${userID}`).then(user => user.name);
}
