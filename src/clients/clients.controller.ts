import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':cupsId')
  findClientByCupsId(@Param('cupsId') cupsId: string) {
    return this.clientsService.findClientByCupsId(cupsId);
  }

}
