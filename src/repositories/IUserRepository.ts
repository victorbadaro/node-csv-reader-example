import { User } from '../models/User';

interface CreateUserDTO {
	name: string;
	email: string;
}

interface IUserRepository {
	list(): User[];
	create({ name, email }: CreateUserDTO): User;
	findByEmail(email: string): User;
}

export { CreateUserDTO, IUserRepository };
