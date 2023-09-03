import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncWrapper from '../../shared/asyncWrapper';
import sendResponse from '../../shared/sendResponse';
import { UserService } from './user.service';

const getAllUsers = asyncWrapper(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});

const getSingleUser = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.getSingleUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: user,
  });
});

export const UserController = { getAllUsers, getSingleUser };
