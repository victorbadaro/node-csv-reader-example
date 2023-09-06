import { User } from '../../models/User';
import { CreateUserDTO, IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
	private users: User[];
	private static INSTANCE: UserRepository;

	private constructor() {
		this.users = [];
	}

	public static getInstance(): UserRepository {
		if (!UserRepository.INSTANCE) {
			UserRepository.INSTANCE = new UserRepository();
		}

		return UserRepository.INSTANCE;
	}

	list(): User[] {
		return this.users;
	}

	create({ name, email }: CreateUserDTO): User {
		const user = new User();

		Object.assign(user, {
			name,
			email,
			createdAt: new Date()
		});

		this.users.push(user);
		return user;
	}

	findByEmail(email: string): User {
		const user = this.users.find(user => user.email === email);

		return user;
	}
}

export { UserRepository };
