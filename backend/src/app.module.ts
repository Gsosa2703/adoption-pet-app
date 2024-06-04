import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AnimalModule } from './animal/animal.module';
import { RescuerModule } from './rescuer/rescuer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    AnimalModule,
    RescuerModule,
  ],
})
export class AppModule {}
