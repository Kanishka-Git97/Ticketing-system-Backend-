/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dtos/authLogin.dto';
import { JwtAuthGuard } from './jwtAuthGuard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() loginInfo: AuthLoginDto, @Res({passthrough: true}) response){
    
    const res = this.authService.login(loginInfo);
    response.cookie('token', (await res).access_token)
    return res;
  } 

  @UseGuards(JwtAuthGuard)
  @Get()
  async test(){
    return "Successfully logged in";
  }
}
