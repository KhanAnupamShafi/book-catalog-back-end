import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncWrapper from '../../shared/asyncWrapper';
import sendResponse from '../../shared/sendResponse';
import { CategoryService } from './category.service';

const createCategory = asyncWrapper(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await CategoryService.createCategory(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

export const CategoryController = { createCategory };
