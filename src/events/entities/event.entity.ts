import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'events_data' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['In-Person', 'Virtual', 'Hybrid'],
    nullable: false,
  })
  eventType: string;

  @Column()
  eventName: string;

  @Column()
  startDate: string;

  @Column()
  startTime: string;

  @Column()
  endDate: string;

  @Column()
  endTime: string;

  @Column()
  storeLocation: string;

  @Column()
  summary: string;

  @Column()
  eventCategory: string;

  @Column()
  eventHeroImage: string;

  @Column()
  eventImageCarousal: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
