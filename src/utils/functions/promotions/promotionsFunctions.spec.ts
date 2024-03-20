import { ClientInfoI } from "src/utils/interfaces/client-info.interface";
import { isClientAllowedToPromotion } from "./promotionsFunctions";

describe('promotionFunctions', () => {
  const clientInfoDataMock: ClientInfoI = {
    "client": {
        "full_name": "Terry Evans",
        "address": "Potato street, 4",
        "cups": "123456",
        "role": "customer",
        "building_type": "house",
        "email": "terry@gmail.com",
        "password": "plainterrypassword"
    },
    "clientSupplyPoint": {
        "cups": "123456",
        "tariff": "One price",
        "invoiced_amount": 50.00,
        "power": {
            "p1": 4500,
            "p2": 4200
        },
        "neighbors": [
            "234567",
            "345678"
        ]
    }
  };
  it('should isClientAllowedToPromotion returns true if meet requirements', () => {
    const response = isClientAllowedToPromotion(clientInfoDataMock);
    expect(response).toBe(true);
  });

  it('should isClientAllowedToPromotion returns false if building_type is not house ', () => {
    clientInfoDataMock.client.building_type = 'apartament';

    const response = isClientAllowedToPromotion(clientInfoDataMock);
    expect(response).toBe(false);
  });

  it('should isClientAllowedToPromotion returns false if neighbors < 0', () => {
    clientInfoDataMock.clientSupplyPoint.neighbors = [];

    const response = isClientAllowedToPromotion(clientInfoDataMock);
    expect(response).toBe(false);
  });
});