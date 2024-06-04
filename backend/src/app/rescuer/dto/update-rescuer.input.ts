import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateRescuerInput } from './create-rescuer.input';

@InputType()
export class UpdateRescuerInput extends PartialType(CreateRescuerInput) {
  @Field(() => Int)
  id: number;
}
