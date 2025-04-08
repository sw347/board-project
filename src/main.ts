import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  app.enableCors({
    origin: 'http://127.0.0.1:5500', // 정확한 클라이언트 주소
    methods: 'GET,POST,OPTIONS', // 허용 메서드 명시
    allowedHeaders: 'Content-Type, Authorization',
    credentials: false // 토큰 미사용 시 false 권장[3][8]
  });

  await app.listen(process.env.PORT || 5161);
}

bootstrap();