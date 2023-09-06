import { Router } from 'express';
import { createUserController } from '../useCases/createUser';

const userRoutes = Router();

userRoutes.get('/', (request, response) => {
	const users = [];

	return response.json(users);
});
userRoutes.post('/', (request, response) => {
	return createUserController.handle(request, response);
});

export { userRoutes };
