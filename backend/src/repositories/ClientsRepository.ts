import IClientsRepository from './IClientsRepository';
import Client from '../models/Client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import { Repository, getRepository, Like } from 'typeorm';

class ClientRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findAll(): Promise<Client[]> {
    return this.ormRepository.find();
  }

  public async findAllByName(name: string): Promise<Client[]> {
    return this.ormRepository.find({
      name: Like(`%${name}%`),
    });
  }

  public async findAllPaginated(page: number): Promise<[Client[], number]> {
    return this.ormRepository.findAndCount({
      skip: page,
      take: 10,
    });
  }

  public async findById(id: string): Promise<Client | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async create({
    cpf,
    email,
    name,
    telephone,
  }: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create({
      cpf,
      email,
      name,
      telephone,
    });

    await this.ormRepository.save(client);

    return client;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default ClientRepository;
