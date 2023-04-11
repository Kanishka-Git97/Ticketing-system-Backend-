/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    project: string;

    @IsNotEmpty()
    reasons: string;

    @IsNotEmpty()
    priority: number;

    @IsNotEmpty()
    userRef: number;
}