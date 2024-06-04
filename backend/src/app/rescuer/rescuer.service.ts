import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rescuer } from './entities/rescuer.entity';
import { CreateRescuerInput } from './dto/create-rescuer.input.ts';
import { UpdateRescuerInput } from './dto/update-rescuer.input.ts/index.ts';

@Injectable()
export class RescuerService {
  constructor(
    @InjectRepository(Rescuer)
    private rescuerRepository: Repository<Rescuer>,
  ) {}

  async create(createRescuerInput: CreateRescuerInput): Promise<Rescuer> {
    const newRescuer = this.rescuerRepository.create(createRescuerInput);
    return this.rescuerRepository.save(newRescuer);
  }

  async findAll(): Promise<Rescuer[]> {
    return this.rescuerRepository.find({ relations: ['animals'] });
  }

  async findOne(id: number): Promise<Rescuer> {
    return this.rescuerRepository.findOne(id, { relations: ['animals'] });
  }

  async update(
    id: number,
    updateRescuerInput: UpdateRescuerInput,
  ): Promise<Rescuer> {
    await this.rescuerRepository.update(id, updateRescuerInput);
    return this.rescuerRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rescuerRepository.delete(id);
  }
}
