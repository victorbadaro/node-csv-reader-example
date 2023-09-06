import { Request, Response } from 'express';
import { ImportUsersUseCase } from './ImportUsersUseCase';

class ImportUsersController {
	constructor(private importUsersUseCase: ImportUsersUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { file } = request;
		const users = await this.importUsersUseCase.execute(file);

		if (users.length > 0) {
			return response.status(201).json(users);
		}

		return response.status(204).send();
	}
}

export { ImportUsersController };
