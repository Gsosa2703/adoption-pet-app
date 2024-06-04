import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  findAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Animal> {
    return this.animalService.findOne(id);
  }

  @Post()
  create(@Body() animal: Partial<Animal>): Promise<Animal> {
    return this.animalService.create(animal);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() animal: Partial<Animal>,
  ): Promise<Animal> {
    return this.animalService.update(id, animal);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.animalService.delete(id);
  }
}
