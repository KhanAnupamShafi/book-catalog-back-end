/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { bookRoutes } from '../modules/book/book.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { orderRoutes } from '../modules/order/order.routes';
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
  {
    path: '/books',
    route: bookRoutes,
  },
  {
    path: '/orders',
    route: orderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
