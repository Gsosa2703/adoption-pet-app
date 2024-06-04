import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Rescuer } from '../rescuer/entities/rescuer.entity';
import { Shelter } from '../shelter/shelter.entity';
import { Veterinary } from '../veterinary/veterinary.entity';
import { ClinicalHistory } from '../clinical-history/clinical-history.entity';
import { Adoption } from '../adoption/adoption.entity';
import { Sponsor } from '../sponsor/sponsor.entity';

@ObjectType()
export class Animal {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  weight: number;

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

  @Field(() => Shelter)
  shelter?: Shelter;

  @Field(() => Veterinary)
  veterinary?: Veterinary;

  @Field(() => ClinicalHistory)
  clinical_history?: ClinicalHistory;

  @Field(() => [Adoption])
  adoptions?: Adoption[];

  @Field(() => [Sponsor])
  sponsors?: Sponsor[];

  @Field(() => Int, { defaultValue: 0 })
  adoption_count: number;
}
