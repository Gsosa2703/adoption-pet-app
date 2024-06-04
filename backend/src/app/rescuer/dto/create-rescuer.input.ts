import { InputType, Field } from '@nestjs/graphql';
import { RescuerType } from '../entities/rescuer.entity';

@InputType()
export class CreateRescuerInput {
  @Field()
  name: string;

  @Field(() => RescuerType)
  type: RescuerType;

  @Field()
  contact_info: string;
}
