/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    async create(createUserDto: CreateUserDto){
       
        const user = User.create(createUserDto);
        await user.save();

        delete user.password;
        return user;
    }

    async findByEmail(email: string){
        const user = await User.findOneByOrFail({ email });
        return user;
    }

    async findUsers(){
        const users =  await User.find();
        return users;
    }

}
