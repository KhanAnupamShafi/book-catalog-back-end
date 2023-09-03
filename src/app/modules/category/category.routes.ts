import express from 'express';
import { ENUM_USER_ROLE } from '../../interfaces/enums';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-category', auth(ENUM_USER_ROLE.ADMIN), CategoryController.createCategory); // Route: /api/v1/categories/create-category (POST) → Only Allowed For Admin

export const categoryRoutes = router;
