import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-category', CategoryController.createCategory); // Route: /api/v1/categories/create-category (POST) → Only Allowed For Admin

export const categoryRoutes = router;
