import mongoose from 'mongoose';
import 'dotenv/config';

export const instanceConnection = async () => {
	mongoose.set('strictQuery', false);
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			console.log('conected got MongoDB Atlas');
		})
		.catch((error) => console.log('error'));
};
