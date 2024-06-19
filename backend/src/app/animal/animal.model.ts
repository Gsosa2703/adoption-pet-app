import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Rescuer } from '../rescuer/entities/rescuer.entity';
// import { Shelter } from '../shelter/shelter.entity';
// import { Veterinary } from '../veterinary/veterinary.entity';
// import { ClinicalHistory } from '../clinical-history/clinical-history.entity';
// import { Adoption } from '../adoption/adoption.entity';
// import { Sponsor } from '../sponsor/sponsor.entity';

import { AnimalType } from './entities/animal.entity';

registerEnumType(AnimalType, {
  name: 'AnimalType',
  description: 'The types of animals',
});
@ObjectType()
export class Animal {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field(() => Int)
  weight: number;

  @Field()
  color: string;

  @Field()
  date_of_rescue: Date;

  @Field()
  breed: string;

  @Field()
  bio: string;

  @Field()
  sick: boolean;

  @Field()
  adopted: boolean;

  @Field(() => Rescuer)
  rescuer?: Rescuer;

  @Field(() => AnimalType)
  type: AnimalType;

  // @Field(() => Shelter)
  // shelter?: Shelter;

  // @Field(() => Veterinary)
  // veterinary?: Veterinary;

  // @Field(() => ClinicalHistory)
  // clinical_history?: ClinicalHistory;

  // @Field(() => [Adoption])
  // adoptions?: Adoption[];

  // @Field(() => [Sponsor])
  // sponsors?: Sponsor[];

  @Field(() => Int, { defaultValue: 0 })
  adoption_count: number;
}
