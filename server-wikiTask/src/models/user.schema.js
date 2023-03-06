import mongoose from 'mongoose';

const schema = mongoose.Schema({
	username: {
		type: 'string',
		required: true,
	},
	password: {
		type: 'string',
		required: true,
	},
});

export const userSchema = mongoose.model('user', schema);
