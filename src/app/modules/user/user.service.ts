import httpStatus from 'http-status';
import prisma from '../../shared/prisma';
import ApiError from '../../utils/apiError';
import { IUserPromise } from '../auth/auth.interface';

const getAllUsers = async (): Promise<IUserPromise[] | null> => {
  const result = await prisma.user.findMany({});
  const usersWithoutPassword = result.map(user => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });

  return usersWithoutPassword;
};

const getSingleUser = async (userId: string): Promise<IUserPromise | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    // Handle the case where the user doesn't exist
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};

export const UserService = { getAllUsers, getSingleUser };
