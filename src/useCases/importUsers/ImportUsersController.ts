import { Request, Response } from 'express';
import { ImportUsersUseCase } from './ImportUsersUseCase';

class ImportUsersController {
	constructor(private importUsersUseCase: ImportUsersUseCase) { }

	handle(request: Request, response: Response): Response {
		return response.send();
	}
}

export { ImportUsersController };
