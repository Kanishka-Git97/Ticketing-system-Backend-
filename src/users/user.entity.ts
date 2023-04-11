/* eslint-disable prettier/prettier */
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Entity({ name: 'users' })
export class User extends BaseEntity{
    @PrimaryGeneratedColumn({ type: "bigint"})
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;


    @Column()
    password: string;

    @Column()
    level: string;

    @BeforeInsert()
    async encryptPassword() {
        this.password = await bcrypt.hash(this.password, 8)
    }

   

    async validatePassword(password: string): Promise<boolean>{
        return bcrypt.compare(password, this.password);
    }


}