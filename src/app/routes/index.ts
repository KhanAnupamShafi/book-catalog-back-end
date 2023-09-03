/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes: any[] = [
  {
    path: '/categories',
    route: categoryRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
