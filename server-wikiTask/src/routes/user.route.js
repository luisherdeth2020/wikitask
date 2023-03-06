import express from 'express';
import { createUserController, loginController } from '../controllers/user.controller.js';

// método (Router), crea el import
const route = express.Router();

route.post('/api/users/create', createUserController);
route.post('/api/users/login', loginController);

export default route;
