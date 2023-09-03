import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import asyncWrapper from '../../shared/asyncWrapper';
import { OrderService } from './order.service';

const createOrder = asyncWrapper(async (req: Request, res: Response) => {
  const token = req.headers.authorization || req.headers.Authorization;

  //   console.log('body', req.body.orderedBooks)

  const result = await OrderService.createOrder(token, req.body.orderedBooks);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
});

const getAllOrders = asyncWrapper(async (req: Request, res: Response) => {
  const token = req.headers.authorization || req.headers.Authorization;
  const result = await OrderService.getAllOrders(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully!',
    data: result,
  });
});

const getOrdersById = asyncWrapper(async (req: Request, res: Response) => {
  const token = req.headers.authorization || req.headers.Authorization;
  const id = req.params.orderId;
  const result = await OrderService.getOrdersById(token, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully!',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersById,
};
