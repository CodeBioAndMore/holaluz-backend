import { Inject, Injectable } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { SupplyPointsService } from 'src/supply-points/supply-points.service';
import { getClientOfferType, isClientAllowedToPromotion } from 'src/utils/functions/promotions/promotionsFunctions';
import { ClientInfoI } from 'src/utils/interfaces/client-info.interface';

@Injectable()
export class PromotionsService {
  constructor(private readonly clientsService: ClientsService, private readonly supplyPointsService: SupplyPointsService){} // This will be auto injected by Nestjs Injector) {}
  
  getClientInfo(clientCupsId: string) {
    const client = this.clientsService.findClientByCupsId(clientCupsId);
    const clientSupplyPoint = SupplyPointsService.findSupplyPointByCupsId(clientCupsId);
    return {client, clientSupplyPoint};
  }

  getClientPromotionOfferDetails(clientCupsId: string,) {
    const clientInfo: ClientInfoI = this.getClientInfo(clientCupsId);
    const isClientAllowedToRoofTopPromotion = isClientAllowedToPromotion(clientInfo);

    if(isClientAllowedToRoofTopPromotion){
      const clientOfferType = getClientOfferType(clientInfo);
      return { ...clientInfo , isClientAllowedToRoofTopPromotion, clientOfferType: clientOfferType};
    }

    return { ...clientInfo , isClientAllowedToRoofTopPromotion}
  }
}
