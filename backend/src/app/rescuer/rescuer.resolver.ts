import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RescuerService } from './rescuer.service';
import { Rescuer } from './rescuer.model';
import { CreateRescuerInput } from './dto/create-rescuer.input';
import { UpdateRescuerInput } from './dto/update-rescuer.input';

@Resolver(() => Rescuer)
export class RescuerResolver {
  constructor(private readonly rescuerService: RescuerService) {}

  @Mutation(() => Rescuer)
  createRescuer(
    @Args('createRescuerInput') createRescuerInput: CreateRescuerInput,
  ): Promise<Rescuer> {
    return this.rescuerService.create(createRescuerInput);
  }

  @Query(() => [Rescuer], { name: 'rescuers' })
  findAll(): Promise<Rescuer[]> {
    return this.rescuerService.findAll();
  }

  @Query(() => Rescuer, { name: 'rescuer' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Rescuer> {
    return this.rescuerService.findOne(id);
  }

  @Mutation(() => Rescuer)
  updateRescuer(
    @Args('updateRescuerInput') updateRescuerInput: UpdateRescuerInput,
  ): Promise<Rescuer> {
    return this.rescuerService.update(
      updateRescuerInput.id,
      updateRescuerInput,
    );
  }

  @Mutation(() => Boolean)
  removeRescuer(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.rescuerService.remove(id).then(() => true);
  }
}
