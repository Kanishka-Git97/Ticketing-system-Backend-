/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dtos/authLogin.dto';
import { JwtAuthGuard } from './jwtAuthGuard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() loginInfo: AuthLoginDto){
    return this.authService.login(loginInfo);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test(){
    return "Successfully logged in";
  }
}
