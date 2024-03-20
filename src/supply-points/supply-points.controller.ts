import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplyPointsService } from './supply-points.service';

@Controller('supply-points')
export class SupplyPointsController {
  constructor(private readonly supplyPointsService: SupplyPointsService) {}

  @Get()
  isClientAllowedToPromotion(@Param('promotionId') promotionId: string = '', @Param('cupsId') cupsId: string) {
    return this.supplyPointsService.findAll();
  }

  @Get(':cupsId')
  findClientByCupsId(@Param('cupsId') cupsId: string) {
    return SupplyPointsService.findSupplyPointByCupsId(cupsId);
  }
}
