import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
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
