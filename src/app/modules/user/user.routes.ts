import express from 'express';
import { ENUM_USER_ROLE } from '../../interfaces/enums';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser);

export const userRoutes = router;
