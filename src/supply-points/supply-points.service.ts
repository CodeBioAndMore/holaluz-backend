import { Injectable } from '@nestjs/common';
import { supplyPointsDataMock } from './../utils/databaseMocks/supply-points';
import { SupplyPoint } from './entities/supply-point.entity';

@Injectable()
export class SupplyPointsService {
  findAll(): SupplyPoint[] {
    return supplyPointsDataMock as unknown as SupplyPoint[];
  }

  static findSupplyPointByCupsId(cupsId: string) {
    //This would be done by mongodb: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
    return supplyPointsDataMock.filter((supplyPoint) => supplyPoint.cups === cupsId)[0];
  }
}
