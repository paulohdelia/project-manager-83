import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class EnableUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ id }: Request): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado', 401);
    }

    user.active = !user.active;

    await this.userRepository.save(user);

    return user;
  }
}

export default EnableUserService;
