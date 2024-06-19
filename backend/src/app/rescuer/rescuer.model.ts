import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Animal } from '../animal/entities/animal.entity';
import { RescuerType } from './entities/rescuer.entity';

registerEnumType(RescuerType, {
  name: 'RescuerType',
  description: 'The types of rescuers',
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
