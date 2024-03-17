import { Test, TestingModule } from '@nestjs/testing';
import { SupplyPointsController } from './supply-points.controller';
import { SupplyPointsService } from './supply-points.service';

describe('SupplyPointsController', () => {
  let controller: SupplyPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyPointsController],
      providers: [SupplyPointsService],
    }).compile();

    controller = module.get<SupplyPointsController>(SupplyPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
