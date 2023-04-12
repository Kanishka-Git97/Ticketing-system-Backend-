/* eslint-disable prettier/prettier */
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'tickets'})
export class Ticket extends BaseEntity{
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column()
    title: string;

    @Column()
    project: string;

    @Column()
    reasons: string;

    @Column()
    priority: number;

    @Column()
    userRef: number;

    @Column()
    status: string;

}
