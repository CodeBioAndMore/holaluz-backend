import { ClientsService } from 'src/clients/clients.service';

import { Test, TestingModule } from '@nestjs/testing';
import { PromotionsService } from './promotions.service';
import { ClientsServiceMock } from 'test/mocks/client.service.mock';

describe('PromotionsService', () => {
  let service: PromotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromotionsService, {provide: ClientsService, useClass: ClientsServiceMock}],
    }).compile();

    service = module.get<PromotionsService>(PromotionsService);
  });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });
});
