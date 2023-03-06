import { taskService } from '../services/task.service.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const findTaskController = async (req, res) => {
	const data = req.get('authorization');
	const decode = jwt.decode(data, process.env.VAL_TOK_ENTRY);

	if (decode) {
		const response = await taskService.findTaskService(decode.username);
		// console.log(response);
		res.status(response.code).json(response.content);
	} else {
		console.log('token is not available');
	}
};

export const createTaskController = async (req, res) => {
	// Recibir token por post
	/*
    {
        text:"",
        token:"" ->{
            username:"",
            password:"",
        }
    }
    */
	const { text, token } = req.body;
	const decode = jwt.decode(token, process.env.VAL_TOK_ENTRY);
	const response = await taskService.createTaskService({ text, username: decode.username });
	res.status(response.code).json(response.content);
};
export const deleteTaskController = async (req, res) => {
	// Recibir token por post
};

export const editTaskController = async (req, res) => {
	// Recibir token por get
};
