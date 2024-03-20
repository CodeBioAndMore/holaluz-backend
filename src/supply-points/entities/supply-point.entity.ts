import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class SupplyPoint { 
    //@PrimaryGeneratedColumn()
    //id: number;
  
    @Column({ length: 10 })
    cups: string;
  
    @Column({ length: 50 })
    tariff: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    invoiced_amount: number;
  
    @Column({ type: 'jsonb', nullable: true })
    power: { p1: number, p2: number };
  
    @Column('simple-array')
    neighbors: string[];
}
