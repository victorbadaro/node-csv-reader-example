import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (request, response) => {
	const users = [];

	return response.json(users);
});
userRoutes.post('/', (request, response) => {
	const user = {};

	return response.status(201).json(user);
});

export { userRoutes };
