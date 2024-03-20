import { Module, forwardRef } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { SupplyPointsModule } from 'src/supply-points/supply-points.module';
import { ClientsModule } from 'src/clients/clients.module';

@Module({
  imports: [ClientsModule, SupplyPointsModule],
  controllers: [PromotionsController],
  providers: [PromotionsService],

})
export class PromotionsModule {}
