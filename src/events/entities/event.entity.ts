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

  @Column()
  eventName: string;

  @Column({
    type: 'enum',
    enum: ['Member', 'Non-Member'],
    nullable: false,
  })
  attendeeType: string;

  @Column({
    type: 'enum',
    enum: ['One-To-One', 'One-To-Many'],
    nullable: false,
  })
  eventType: string;

  @Column()
  storeName: string;

  @Column()
  eventLocation: string;

  @Column()
  sponsorshipTier: string | string[];

  @Column()
  eventDescription: string;

  @Column()
  eventStartDate: string;

  @Column()
  eventStartTime: string;

  @Column()
  eventEndDate: string;

  @Column()
  eventEndTime: string;

  @Column()
  eventCategory: string;

  @Column({ default: false })
  eventSampling: boolean;

  @Column()
  eventSamplingProduct: string | string[];

  @Column()
  eventHeroImage: string;

  @Column()
  eventImageCarousal: string;

  @Column()
  eventTnC: string;

  @Column()
  publishToBrands: boolean;

  @Column()
  publishToCustomers: boolean;

  @Column({
    type: 'enum',
    enum: ['Draft', 'Live', 'InActive'],
    nullable: false,
  })
  status: string;

  @Column()
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
