import { Module } from '@nestjs/common';
import { SupplyPointsService } from './supply-points.service';
import { SupplyPointsController } from './supply-points.controller';

@Module({
  controllers: [SupplyPointsController],
  providers: [SupplyPointsService],
})
export class SupplyPointsModule {}
