import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5500', "http://127.0.0.1:5500", "https://sw347.github.io"], // 프론트 주소 넣기
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTION',
    credentials: true,
    maxAge: 86400,
  });
  await app.listen(process.env.PORT || 5161);
}

bootstrap();