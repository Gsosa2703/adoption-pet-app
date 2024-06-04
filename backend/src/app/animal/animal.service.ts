import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  // CRUD methods here
  async findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  async findOne(id: number): Promise<Animal> {
    return this.animalRepository.findOne(id);
  }

  async create(animal: Partial<Animal>): Promise<Animal> {
    const newAnimal = this.animalRepository.create(animal);
    return this.animalRepository.save(newAnimal);
  }

  async update(id: number, animal: Partial<Animal>): Promise<Animal> {
    await this.animalRepository.update(id, animal);
    return this.animalRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
