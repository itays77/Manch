import express, { RequestHandler } from 'express';
import MyUserController from '../controllers/MyUserController';

const router = express.Router();

router.post('/', MyUserController.createCurrentUser as RequestHandler);

export default router;