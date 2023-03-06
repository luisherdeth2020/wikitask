import { userSchema } from '../models/user.schema.js';
import bcrypt from 'bcrypt';
import { instanceConnection } from '../config/connection.database.js';
// mongo tenemos que agregar ASYNC

class UserService {
	async validatePassword(passwordHash, password) {
		try {
			const response = bcrypt.compare(password, passwordHash);
			return response;
		} catch (error) {
			return false;
		}
	}
	async loginService(data) {
		try {
			const { username, password } = data;
			await instanceConnection();

			const user = await userSchema.findOne({ username });

			if (!user) {
				return {
					error: true,
					code: 400,
					content: {
						error: true,
						message: 'Invalid username',
					},
				};
			}

			const response = await this.validatePassword(user.password, password);

			if (response) {
				return {
					success: true, // condicionar en el backend
					code: 200, //enviar al front
					content: {
						success: response,
						message: 'Login correct',
					}, //enviar al front para condicionar
					user,
				};
			} else {
				return {
					error: true,
					code: 400,
					content: {
						error: true,
						message: 'Invalid password',
					},
				};
			}
		} catch (error) {
			return {
				error: true,
				code: 500,
				content: {
					error: true,
					message: 'Error service',
				},
			};
		}
	}

	async createUserService(data) {
		/*
        {
            username:"",
            password:""
        }
        */
		try {
			const { username, password } = data;

			await instanceConnection();

			const user = await userSchema.findOne({ username });

			if (user) {
				return {
					error: true,
					code: 500,
					content: {
						error: true,
						message: 'Ya existe un usuario con ese nombre',
					},
				};
			}

			const passHash = await bcrypt.hash(password, 5);

			await userSchema.create({ username: data.username, password: passHash });

			return {
				success: true,
				code: 200,
				content: {
					success: true,
					message: 'Usuario creado con éxito',
				},
			};
		} catch (error) {
			return {
				error: true,
				code: 500,
				content: {
					error: true,
					message: 'Error de servidor',
					// te da error de servidor de consola (línea 15)
					extra: error,
				},
			};
		}
	}
}
export const userService = new UserService();
