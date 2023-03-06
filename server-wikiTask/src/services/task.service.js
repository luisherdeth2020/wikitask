import { instanceConnection } from '../config/connection.database.js';
import { taskSchema } from '../models/task.schema.js';
import { userSchema } from '../models/user.schema.js';

class TaskService {
	async findTaskService(username) {
		// "username"
		try {
			await instanceConnection();
			const tasks = await taskSchema.find({ username: username });
			return {
				success: true,
				code: 200,
				content: tasks,
			};
		} catch (error) {
			return {
				error: true,
				code: 500,
				content: {
					error: true,
				},
			};
		}
	}

	async createTaskService(data) {
		try {
			// data:{username,text}
			const { username, text } = data;
			await instanceConnection();

			const user = await userSchema.findOne({ username });

			if (!user) {
				return {
					error: true,
					code: 400,
					content: {
						error: true,
					},
				};
			}

			await taskSchema.create(data);
			return {
				success: true,
				code: 200,
				content: {
					success: true,
					message: 'Task create susessful',
				},
			};
		} catch (error) {
			return {
				error: true,
				code: 500,
				content: {
					error: true,
				},
			};
		}
	}
}
export const taskService = new TaskService();
