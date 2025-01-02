import express, { RequestHandler } from 'express';
import MyUserController from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';

const router = express.Router();

router.post('/', jwtCheck, MyUserController.createCurrentUser as RequestHandler);
router.put('/', jwtCheck, jwtParse,  MyUserController.updateCurrentUser as RequestHandler);

export default router;
