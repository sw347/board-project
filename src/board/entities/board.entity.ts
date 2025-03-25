import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board')
export class Board {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  content: string;

}
