import { IUserRepository } from '../../repositories/IUserRepository';

class ImportUsersUseCase {
	constructor(private userRepository: IUserRepository) { }

	execute() { }
}

export { ImportUsersUseCase };
