import { Router } from 'express';
import { createUserController } from '../useCases/createUser';
import { listUsersController } from '../useCases/listUsers';

const userRoutes = Router();

userRoutes.get('/', (request, response) => {
	return listUsersController.handle(request, response);
});
userRoutes.post('/', (request, response) => {
	return createUserController.handle(request, response);
});

export { userRoutes };
