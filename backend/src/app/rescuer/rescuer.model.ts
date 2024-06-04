import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Animal } from '../animal/animal.entity';
import { RescuerType } from './entities/rescuer.entity';

registerEnumType(RescuerType, {
  name: 'RescuerType', // this one is mandatory
  description: 'The types of rescuers', // this one is optional
});

@ObjectType()
export class Rescuer {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => RescuerType)
  type: RescuerType;

  @Field()
  contact_info: string;

  @Field(() => [Animal], { nullable: true })
  animals?: Animal[];
}
