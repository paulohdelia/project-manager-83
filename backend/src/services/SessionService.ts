import { compare } from 'bcryptjs';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';
import { sign } from 'jsonwebtoken';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

class SessionService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Credenciais inválidas', 401);
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new AppError('Credenciais inválidas', 401);
    }

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: '1d',
    });

    delete user.password;

    return {
      token,
      user,
    };
  }
}

export default SessionService;