import { SupplyPointsService } from "src/supply-points/supply-points.service";
import { offers } from "src/utils/databaseMocks/offers";
import { BuildingTypeEnum } from "src/utils/enums/building-type.enum";
import { ClientInfoI } from "src/utils/interfaces/client-info.interface";

export function isClientAllowedToPromotion(clientInfo: ClientInfoI) {
    if(clientInfo.client.building_type == BuildingTypeEnum.house && clientInfo.clientSupplyPoint.neighbors.length > 0){
      return true;
    }
    return false;
}

export function getNeighborsSupplyPointPowerInfo(neighborsCUPS: string[]) {
    let neighborsSupplyPointsDataTemp = [];
    neighborsCUPS.forEach(clientCupsId => {
        
        const neighborsSupplyPointsData = SupplyPointsService.findSupplyPointByCupsId(clientCupsId);
        neighborsSupplyPointsDataTemp.push({neighborsCups: neighborsSupplyPointsData.cups, power: neighborsSupplyPointsData.power})
    });
    return neighborsSupplyPointsDataTemp;
}

export function isCurrentClientSupplyPointPowerInfoHigherThanNeighbors(clientPowerData, neighborsPowerData) {
    //TODO: if necessary add parse from string to number
    neighborsPowerData.forEach(neighbor => {
        if(clientPowerData.p1 < neighbor.power.p1 && clientPowerData.p2 < neighbor.power.p2 ){
            return false;
        }
    });
    return true;
}

export function getClientOfferType(clientInfo: ClientInfoI) {
    let clientOfferType =  offers[0];
    console.log('clientInfo.client.power.p1', clientInfo.clientSupplyPoint.power.p1)
    console.log('clientInfo.client.power.p2', clientInfo.clientSupplyPoint.power.p2)
    console.log('clientInfo.clientSupplyPoint.neighbors', clientInfo.clientSupplyPoint.neighbors)

    //si tiene neighbors, para cada uno ver p1 y p2 

    //getNeighborsCUPS
    const neighborsCUPS = clientInfo.clientSupplyPoint.neighbors;
    const neighborsSupplyPointsPowerData = getNeighborsSupplyPointPowerInfo(neighborsCUPS);
    
    if(isCurrentClientSupplyPointPowerInfoHigherThanNeighbors(clientInfo.clientSupplyPoint.power, neighborsSupplyPointsPowerData)){
        clientOfferType=offers[1];
    }
    console.log('clientOfferType', clientOfferType)
    return clientOfferType;
}