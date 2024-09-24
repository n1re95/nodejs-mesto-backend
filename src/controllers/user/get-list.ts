import { User } from '../../models/user';

export const getList = async (filter = {}) => {
  const users = await User.find(filter);
  return users;
};
