/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { categoryRoutes } from '../modules/category/category.routes';

const router = express.Router();

const moduleRoutes: any[] = [
  {
    path: '/categories',
    route: categoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
