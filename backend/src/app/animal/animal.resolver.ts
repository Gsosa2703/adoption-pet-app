import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { Animal } from './animal.model';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';

@Resolver(() => Animal)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Mutation(() => Animal)
  createAnimal(
    @Args('createAnimalInput') createAnimalInput: CreateAnimalInput,
  ): Promise<Animal> {
    return this.animalService.create(createAnimalInput);
  }

  @Query(() => [Animal], { name: 'animals' })
  findAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Query(() => Animal, { name: 'animal' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Animal> {
    return this.animalService.findOne(id);
  }

  @Mutation(() => Animal)
  updateAnimal(
    @Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput,
  ): Promise<Animal> {
    return this.animalService.update(updateAnimalInput.id, updateAnimalInput);
  }

  @Mutation(() => Boolean)
  removeAnimal(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.animalService.remove(id).then(() => true);
  }
}
