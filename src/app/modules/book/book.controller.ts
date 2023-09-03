import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncWrapper from '../../shared/asyncWrapper';
import prisma from '../../shared/prisma';
import sendResponse from '../../shared/sendResponse';

const createBook = asyncWrapper(async (req: Request, res: Response) => {
  // creating new book
  const result = await prisma.book.create({
    data: req.body,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully!',
    data: result,
  });
});

const getAllBooks = asyncWrapper(async (req: Request, res: Response) => {
  const filters = pick(req.query, booksFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  // console.log('Option', filters)

  const result = await BookService.getAllBooks(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books fetched successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const deleteBook = asyncWrapper(async (req: Request, res: Response) => {
  // delete a category
  const result = await prisma.book.delete({
    where: {
      id: req.params.id,
    },
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book is deleted successfully!',
    data: result,
  });
});

const getBookByCategoryId = asyncWrapper(async (req: Request, res: Response) => {
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  const result = await BookService.getBookByCategoryId(req.params.categoryId, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books with associated category data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBookById = asyncWrapper(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBookById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetced successfully!',
    data: result,
  });
});

const updateBook = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await BookService.updateBook(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully!',
    data: result,
  });
});

export const BookController = {
  createBook,
  deleteBook,
  getSingleBookById,
  getAllBooks,
  getBookByCategoryId,
  updateBook,
};
