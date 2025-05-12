import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Create an instance of the app
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (Cross-Origin Resource Sharing) to allow Angular frontend (http://localhost:4200)
  // to make requests to the NestJS backend (http://localhost:3000)
  app.enableCors();

  // ✅ Enable global validation pipes (validates the DTOs)
  // This ensures that all incoming data is validated based on the rules specified in your DTOs
  app.useGlobalPipes(new ValidationPipe());

  // ✅ Configure and start the app to listen on the port specified by environment variable `PORT` 
  // or fall back to 3000 if not provided.
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
