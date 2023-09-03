import express from 'express';
import { ENUM_USER_ROLE } from '../../interfaces/enums';
import { default as auth, default as authPermission } from '../../middlewares/auth';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/create-book', authPermission(ENUM_USER_ROLE.ADMIN), BookController.insertIntoDB);
router.get('/', BookController.getAllBooks);
router.get('/:categoryId/category', BookController.getBookBuCategoryId);
router.get('/:id', BookController.getSingleBookById);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.updateSingleBookById);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteSingleBookById);

export const bookRoutes = router;
