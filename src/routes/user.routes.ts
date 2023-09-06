import { Router } from 'express';
import { createUserController } from '../useCases/createUser';
import { importUsersController } from '../useCases/importUsers';
import { listUsersController } from '../useCases/listUsers';

const userRoutes = Router();

userRoutes.get('/', (request, response) => {
	return listUsersController.handle(request, response);
});
userRoutes.post('/', (request, response) => {
	return createUserController.handle(request, response);
});
userRoutes.post('/import', (request, response) => {
	return importUsersController.handle(request, response);
});

export { userRoutes };
