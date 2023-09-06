import { parse } from 'csv-parse';
import fs from 'fs';
import { User } from '../../models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface ImportedUser {
	name: string;
	email: string;
}
class ImportUsersUseCase {
	constructor(private userRepository: IUserRepository) { }

	loadUsers(file: Express.Multer.File): Promise<ImportedUser[]> {
		return new Promise((resolve, reject) => {
			const importedUsers: ImportedUser[] = [];
			const stream = fs.createReadStream(file.path);
			const parseFile = parse();

			stream.pipe(parseFile);

			parseFile.on('data', (line) => {
				const [name, email] = line;
				const importedUser: ImportedUser = {
					name,
					email
				};

				importedUsers.push(importedUser);
			}).on('end', () => {
				return resolve(importedUsers);
			}).on('error', (error) => {
				return reject(error);
			});
		});
	}

	async execute(file: Express.Multer.File): Promise<User[]> {
		const importedUsers = await this.loadUsers(file);

		const users = importedUsers.map(importedUser => {
			const { name, email } = importedUser;
			const userWithThisEmailAlreadyExists = this.userRepository.findByEmail(email);

			if (!userWithThisEmailAlreadyExists) {
				const user = this.userRepository.create({ name, email });

				return user;
			}
		}).filter(Boolean);

		return users;
	}
}

export { ImportUsersUseCase };
