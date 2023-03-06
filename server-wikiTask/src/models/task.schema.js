import mongoose from "mongoose";

const schema = mongoose.Schema({
	text: {
		type: 'string',
		required: true,
	},
	complete: {
		type: 'boolean',
		default: false,
	},
	timestamp: {
		type: 'string',
		default: Date.now(),
	},
	username: {
		type: 'string',
		required: true,
	},
});

export const taskSchema = mongoose.model('task', schema);