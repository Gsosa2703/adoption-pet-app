import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAnimalInput {
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

  //   @Field(() => Int, { nullable: true })
  //   rescuerId?: number;

  //   @Field(() => Int, { nullable: true })
  //   shelterId?: number;

  //   @Field(() => Int, { nullable: true })
  //   veterinaryId?: number;

  //   @Field(() => Int, { nullable: true })
  //   clinicalHistoryId?: number;
}
