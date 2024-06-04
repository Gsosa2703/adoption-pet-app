import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Rescuer } from '../rescuer/rescuer.entity';
import { Shelter } from '../shelter/shelter.entity';
import { Veterinary } from '../veterinary/veterinary.entity';
import { ClinicalHistory } from '../clinical-history/clinical-history.entity';
import { Adoption } from '../adoption/adoption.entity';
import { Sponsor } from '../sponsor/sponsor.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  date_of_rescue: Date;

  @Column()
  breed: string;

  @Column('text')
  bio: string;

  @Column()
  sick: boolean;

  @ManyToOne(() => Rescuer, (rescuer) => rescuer.animals)
  rescuer: Rescuer;

  @ManyToOne(() => Shelter, (shelter) => shelter.animals)
  shelter: Shelter;

  @ManyToOne(() => Veterinary, (veterinary) => veterinary.animals)
  veterinary: Veterinary;

  @OneToOne(() => ClinicalHistory, (clinicalHistory) => clinicalHistory.animal)
  @JoinColumn()
  clinical_history: ClinicalHistory;

  @OneToMany(() => Adoption, (adoption) => adoption.animal)
  adoptions: Adoption[];

  @OneToMany(() => Sponsor, (sponsor) => sponsor.animal)
  sponsors: Sponsor[];

  @Column({ default: 0 })
  adoption_count: number;
}
