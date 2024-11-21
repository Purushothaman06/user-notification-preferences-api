import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Notification Preferences API')
    .setDescription(
      'An API for managing user notification preferences and sending notifications.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log(
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
  console.log(
    `Swagger Docs available at: http://localhost:${process.env.PORT}/api-docs`,
  );
}
bootstrap();
