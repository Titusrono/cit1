import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // Create an instance of the app
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Enable CORS (Cross-Origin Resource Sharing) to allow Angular frontend (http://localhost:4200)
  // to make requests to the NestJS backend (http://localhost:3000)
  app.enableCors();

  // ✅ Enable global validation pipes (validates the DTOs)
  // This ensures that all incoming data is validated based on the rules specified in your DTOs
  app.useGlobalPipes(new ValidationPipe());

  // ✅ Serve static files from the 'uploads' folder
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',  // This will allow access to images via 'http://localhost:3000/uploads/your-image.jpg'
  });

  // ✅ Configure and start the app to listen on the port specified by environment variable `PORT` 
  // or fall back to 3000 if not provided.
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
