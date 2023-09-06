import { User } from '../../models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface CreateUserRequest {
	name: string;
	email: string;
}

class CreateUserUseCase {
	constructor(private userRepository: IUserRepository) { }

	execute({ name, email }: CreateUserRequest): User {
		const userWithThisEmailAlreadyExists = this.userRepository.findByEmail(email);

		if (userWithThisEmailAlreadyExists) {
			throw new Error('This email is already being used');
		}

		const user = this.userRepository.create({ name, email });

		return user;
	}
}

export { CreateUserUseCase };
