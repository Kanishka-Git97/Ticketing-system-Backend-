/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from '@nestjs/common';


@Injectable()
export class JwtConfig extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // secretOrKey: process.env.JWT_SECRET
            secretOrKey: "kanishka78002qhgjdsjk023"
        })  
    }

    async validate(payload: {userId: number}){
        return {
            userId: payload.userId,
        }
    }
}
