import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectOptions } from 'typeorm';
import path from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    "database": "./db.sql",
    "type": "sqlite",
    "synchronize": true,
    "entities": [
      "dist/**/*.model.js"
    ]
  } as ConnectOptions),
    PersonModule],
})
export class AppModule { }
