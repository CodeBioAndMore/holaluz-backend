import { Injectable } from '@nestjs/common';
import { clientsDataMock } from './../helpers/databaseMocks/clients';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  findAll(): Client[] {
    return clientsDataMock ;
  }

  findClientByCupsId(cupsId: string) {
    //This would be done by mongodb: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
    return clientsDataMock.filter((client) => client.cups === cupsId);
  }
}
