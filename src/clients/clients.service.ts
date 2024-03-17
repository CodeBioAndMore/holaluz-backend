import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { clientsDataMock } from './../helpers/databaseMocks/clients';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll(): Client[] {
    return clientsDataMock ;
  }

  findClientByCupsId(cupsId: string) {
    //This would be done by mongodb: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
    return clientsDataMock.filter((client) => client.cups === cupsId);
  }
}
