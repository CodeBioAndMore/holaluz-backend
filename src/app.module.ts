import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { SupplyPointsModule } from './supply-points/supply-points.module';
import { PromotionsModule } from './promotions/promotions.module';

@Module({
  imports: [ClientsModule, SupplyPointsModule, PromotionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
