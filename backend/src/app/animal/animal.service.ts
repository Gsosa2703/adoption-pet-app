import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  async create(createAnimalInput: CreateAnimalInput): Promise<Animal> {
    const newAnimal = this.animalRepository.create(createAnimalInput);
    return this.animalRepository.save(newAnimal);
  }

  async findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  async findOne(id: number): Promise<Animal> {
    return this.animalRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateAnimalInput: UpdateAnimalInput,
  ): Promise<Animal> {
    await this.animalRepository.update(id, updateAnimalInput);
    return this.animalRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
