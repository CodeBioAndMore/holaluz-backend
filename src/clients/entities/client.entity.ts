import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  //TODO: Ask primary key
  //@PrimaryGeneratedColumn()
  //id: number;

  @Column({ length: 100 })
  full_name: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 10 })
  cups: string;

  @Column({ length: 50 })
  role: string;

  @Column({ length: 50 })
  building_type: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;
}