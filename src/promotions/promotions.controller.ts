import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsEnum } from 'src/utils/enums/promotion.enum';

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  //@Get(':clientCupsId/:promotionId/')
  //isClientAllowedToPromotion(@Param('clientCupsId') clientCupsId: string, @Param('promotionId') promotionId: PromotionsEnum) {
  //  console.log('aaa', promotionId + clientCupsId)
  //  return this.promotionsService.isClientAllowedToPromotion(clientCupsId);
  //}

  @Get(':clientCupsId')
  getClientPromotionOfferDetails(@Param('clientCupsId') clientCupsId: string) {
    //const clientInfo = this.promotionsService.getClientInfo(clientCupsId);

    return this.promotionsService.getClientPromotionOfferDetails(clientCupsId);
  }
}
