import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://xzyxccrd:Jlhbc9AM3VaAGcC7-DBy1XRjk0kElqpC@hawk.rmq.cloudamqp.com/xzyxccrd',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen().then(() => console.log('Microservices is running'));
}
bootstrap();
