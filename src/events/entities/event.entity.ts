import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import {
  AttendeeType,
  EventType,
  SponsorshipTier,
  Status,
} from '../events.enum';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'events_data' })
export class Event {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  eventName: string;

  @Field()
  @Column({
    type: 'enum',
    enum: AttendeeType,
    nullable: false,
  })
  attendeeType: string;

  @Field()
  @Column({
    type: 'enum',
    enum: EventType,
    nullable: false,
  })
  eventType: string;

  @Field()
  @Column()
  storeName: string;

  @Field()
  @Column()
  eventLocation: string;

  @Field(() => [SponsorshipTier])
  @Column({
    type: 'enum',
    enum: SponsorshipTier,
    array: true,
    nullable: false,
  })
  sponsorshipTier: SponsorshipTier[];

  @Field()
  @Column()
  eventDescription: string;

  @Field()
  @Column()
  eventStartDate: string;

  @Field()
  @Column()
  eventStartTime: string;

  @Field()
  @Column()
  eventEndDate: string;

  @Field()
  @Column()
  eventEndTime: string;

  @Field()
  @Column()
  eventCategory: string;

  @Field()
  @Column()
  eventSampling: boolean;

  @Field()
  @Column()
  eventSamplingProduct: string;

  @Field()
  @Column()
  eventHeroImage: string;

  @Field()
  @Column()
  eventImageCarousal: string;

  @Field()
  @Column()
  eventTnC: string;

  @Field()
  @Column()
  publishToBrands: boolean;

  @Field()
  @Column()
  publishToCustomers: boolean;

  @Field()
  @Column({
    type: 'enum',
    enum: Status,
    nullable: false,
  })
  status: string;

  @Field()
  @Column()
  isDeleted: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Ticket, (ticket) => ticket.eventId)
  @Field(() => [Ticket], { nullable: true })
  tickets: Ticket[];
}
