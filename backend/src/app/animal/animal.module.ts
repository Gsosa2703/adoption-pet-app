import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { Animal } from './animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalService],
  controllers: [AnimalController],
})
export class AnimalModule {}
