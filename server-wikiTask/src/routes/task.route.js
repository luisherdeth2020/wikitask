import express from 'express';
import { createTaskController, findTaskController } from '../controllers/task.controller.js';
import { verifyDataCreate } from './middlewares/task.middleware.js';

const route = express.Router()

route.get('/api/tasks/',findTaskController)
route.post('/api/tasks/create', verifyDataCreate, createTaskController);


export default route;