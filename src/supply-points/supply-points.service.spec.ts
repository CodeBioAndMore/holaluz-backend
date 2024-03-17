import { Test, TestingModule } from '@nestjs/testing';
import { SupplyPointsService } from './supply-points.service';

describe('SupplyPointsService', () => {
  let service: SupplyPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplyPointsService],
    }).compile();

    service = module.get<SupplyPointsService>(SupplyPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
