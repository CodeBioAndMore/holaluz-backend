import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplyPointsService } from './supply-points.service';

@Controller('supply-points')
export class SupplyPointsController {
  constructor(private readonly supplyPointsService: SupplyPointsService) {}

  @Get()
  findAll() {
    return this.supplyPointsService.findAll();
  }

  @Get(':cupsId')
  findClientByCupsId(@Param('cupsId') cupsId: string) {
    return this.supplyPointsService.findSypplyPointByCupsId(cupsId);
  }
}
