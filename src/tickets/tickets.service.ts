import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dtos/createTicket.dto';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {

    async createTicket(createTicketDto: CreateTicketDto){
        const ticket = Ticket.create(createTicketDto);
        return await ticket.save();
    }

    async findTickets(){
        const tickets = await Ticket.find();
        return tickets;
    }

    async findByUser(userId: number){
        const tickets = await Ticket.findBy({ userRef: userId });
        return tickets;
    }
}
