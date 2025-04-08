import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
          rejectUnauthorized: false,
        },
      autoLoadEntities: true,
      synchronize: true
    }),
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
