import IClientsRepository from '../repositories/IClientsRepository';
import Client from '../models/Client';

interface IRequest {
  name: string;
  email: string;
  telephone: string;
  cpf: string;
}

class CreateClientService {
  private clientRepository: IClientsRepository;

  constructor(clientRepository: IClientsRepository) {
    this.clientRepository = clientRepository;
  }

  public async execute({
    cpf,
    email,
    name,
    telephone,
  }: IRequest): Promise<Client> {
    const client = await this.clientRepository.create({
      cpf,
      email,
      name,
      telephone,
    });

    return client;
  }
}

export default CreateClientService;
