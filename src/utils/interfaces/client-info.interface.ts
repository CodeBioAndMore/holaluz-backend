import { Client } from 'src/clients/entities/client.entity';
import { SupplyPoint } from './../../supply-points/entities/supply-point.entity';
export interface ClientInfoI {
    client: Client | undefined;
    clientSupplyPoint: SupplyPoint | undefined; 
}