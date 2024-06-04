import { Animal } from '../../animal/entities/animal.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
    enum: ['Person', 'Shelter', 'Organization'],
  })
  type: 'Person' | 'Shelter' | 'Organization';

  @OneToMany(() => Animal, (animal) => animal.rescuer)
  animals: Animal[];
}
