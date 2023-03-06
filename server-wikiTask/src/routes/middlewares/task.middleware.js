export const verifyDataCreate = async (req, res, next) => {
	// { text:"", token:""}
	try {
		const { token, text } = req.body;

		if (!token || !text || token.length < 30) {
			const response = {
				error: true,
				code: 400,
				content: {
					error: true,
					message: 'Error, se quedo en el middleware',
				},
			};

			res.status(response.code).json(response.content);
		} else {
			next();
		}
	} catch (error) {
		const response = {
			error: true,
			code: 500,
			content: {
				error: true,
			},
		};
		res.status(response.code).json(response.content);
	}
};
