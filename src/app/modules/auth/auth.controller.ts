import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import asyncWrapper from '../../shared/asyncWrapper';
import sendResponse from '../../shared/sendResponse';
import { IRefreshTokenResponse } from './auth.interface';
import { AuthService } from './auth.service';

const createUser = asyncWrapper(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await AuthService.createUser(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const loginUser = asyncWrapper(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await AuthService.loginUser(data);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully',
    token: others.accessToken,
  });
});

const refreshToken = asyncWrapper(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully !',
    token: result.accessToken,
  });
});

export const AuthController = { createUser, loginUser, refreshToken };
