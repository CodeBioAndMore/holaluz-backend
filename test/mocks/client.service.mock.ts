import { clientsDataMock } from './../../src/utils/databaseMocks/clients';
export class ClientsServiceMock {
    async findAll(){
        return clientsDataMock;
    }
    // Mocked method to retrieve a client by ID
    async findClientByCupsId(id: number) {
      // Return a dummy client object for testing purposes
      return clientsDataMock[0];
    }
  }
  