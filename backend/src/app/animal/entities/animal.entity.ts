import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  // OneToOne,
  // OneToMany,
  // JoinColumn,
} from 'typeorm';
import { Rescuer } from '../../rescuer/entities/rescuer.entity';
// import { Shelter } from '../shelter/shelter.entity';
// import { Veterinary } from '../veterinary/veterinary.entity';
// import { ClinicalHistory } from '../clinical-history/clinical-history.entity';
// import { Adoption } from '../adoption/adoption.entity';
// import { Sponsor } from '../sponsor/sponsor.entity';

export enum AnimalType {
  CAT = 'Cat',
  DOG = 'Dog',
}

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  weight: number;

  @Column()
  age: number;

  @Column()
  date_of_rescue: Date;

  @Column()
  breed: string;

  @Column('text')
  bio: string;

  @Column({ default: false })
  sick: boolean;

  @Column({
    type: 'enum',
    enum: AnimalType,
  })
  type: AnimalType;

  @Column({ default: false })
  adopted: boolean;

  @ManyToOne(() => Rescuer, (rescuer) => rescuer.animals, { nullable: true })
  rescuer?: Rescuer;

  // @ManyToOne(() => Shelter, (shelter) => shelter.animals, { nullable: true })
  // shelter?: Shelter;

  // @ManyToOne(() => Veterinary, (veterinary) => veterinary.animals, {
  //   nullable: true,
  // })
  // veterinary?: Veterinary;

  // @OneToOne(
  //   () => ClinicalHistory,
  //   (clinicalHistory) => clinicalHistory.animal,
  //   { nullable: true },
  // )
  // @JoinColumn()
  // clinical_history?: ClinicalHistory;

  // @OneToMany(() => Adoption, (adoption) => adoption.animal, { nullable: true })
  // adoptions?: Adoption[];

  // @OneToMany(() => Sponsor, (sponsor) => sponsor.animal, { nullable: true })
  // sponsors?: Sponsor[];

  @Column({ default: 0 })
  adoption_count: number;
}
