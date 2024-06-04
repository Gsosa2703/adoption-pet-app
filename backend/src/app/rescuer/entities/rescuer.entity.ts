import { Animal } from '../../animal/entities/animal.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum RescuerType {
  PERSON = 'Person',
  ORGANIZATION = 'Organization',
  SHELTER = 'Shelter',
}
@Entity()
export class Rescuer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({
    type: 'enum',
    enum: RescuerType,
    default: RescuerType.PERSON,
  })
  type: RescuerType;

  @OneToMany(() => Animal, (animal) => animal.rescuer)
  animals: Animal[];
}
