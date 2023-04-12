/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Middleware
  const corsOptions = {
   origin: process.env.DB_FRONTEND, 
   credentials:true,           
   optionSuccessStatus:200,
  }
  app.use(cors(corsOptions));
  app.use(cookieParser());
  await app.listen(3030);
}
bootstrap();
