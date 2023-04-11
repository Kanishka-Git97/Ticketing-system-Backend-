/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dtos/authLogin.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async login(loginInfo: AuthLoginDto){
        const user = await this.validateUser(loginInfo);

        const payload= {
            userId: user.id,
        };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    async validateUser(loginInfo: AuthLoginDto){
        const  { email, password } = loginInfo;
        const user = await this.usersService.findByEmail(email);

        if(!(await user?.validatePassword(password))){
            throw new UnauthorizedException();
        }

        return user;
    }
}
