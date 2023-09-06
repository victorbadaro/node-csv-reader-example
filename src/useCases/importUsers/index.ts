import { UserRepository } from '../../repositories/implementations/UserRepository';
import { ImportUsersController } from './ImportUsersController';
import { ImportUsersUseCase } from './ImportUsersUseCase';

const userRepository = UserRepository.getInstance();
const importUsersUseCase = new ImportUsersUseCase(userRepository);
const importUsersController = new ImportUsersController(importUsersUseCase);

export { importUsersController };
