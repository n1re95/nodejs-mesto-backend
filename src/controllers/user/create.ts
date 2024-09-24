import { User, type IUser } from '../../models/user';

export const create = async (params: Partial<IUser>): Promise<void> => {
  const user = new User(params);
  await user.save();
};
