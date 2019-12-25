import express from 'express';
import { AuthController } from './controllers/AuthController';
import { TeamController } from './controllers/TeamController';

const router = express.Router();

router.use('/auth', AuthController.getInstance().getRouter());
router.use('/team', TeamController.getInstance().getRouter());

export { router as indexRouter };
