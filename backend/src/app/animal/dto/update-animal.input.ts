import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAnimalInput } from './create-animal.input';

@InputType()
export class UpdateAnimalInput extends PartialType(CreateAnimalInput) {
  @Field(() => Int)
  id: number;
}
