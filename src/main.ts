import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

  await app.listen(process.env.PORT || 5161);
}

bootstrap();