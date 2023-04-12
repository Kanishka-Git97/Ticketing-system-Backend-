import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dtos/createTicket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketsService.findTickets();
  }

  @Get(':id')
  findByUser(@Param('id') id: number) {
    return this.ticketsService.findByUser(id);
  }
}
