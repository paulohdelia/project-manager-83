import IClientsRepository from '../repositories/IClientsRepository';
import Client from '../models/Client';
import IPaginated from '../Interfaces/Paginated';

interface IRequest {
  page: number;
}

class PaginatedClientsService {
  private clientRepository: IClientsRepository;

  constructor(clientRepository: IClientsRepository) {
    this.clientRepository = clientRepository;
  }

  public async execute({ page }: IRequest): Promise<IPaginated<Client>> {
    const [clients, total] = await this.clientRepository.findAllPaginated(
      page * 10,
    );

    const totalPages = Math.ceil(total / 10);
    const firstPage = page === 0;
    const lastPage = page === totalPages - 1;

    const response: IPaginated<Client> = {
      data: clients,
      page,
      elements: clients.length,
      elementsPerPage: 10,
      totalElements: total,
      totalPages,
      firstPage,
      lastPage,
    };

    return response;
  }
}

export default PaginatedClientsService;
