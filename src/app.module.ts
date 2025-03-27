import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path';
import * as process from 'process';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..','public'),
      serveRoot: '/static'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..','dist'),
      serveRoot: '/dist'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      // dropSchema: true,
    }),
    BoardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
