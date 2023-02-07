import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'server' })
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  region: string;

  @Column()
  game: string;

  @Column()
  domain: string;

  @Column()
  desc: string;
}
