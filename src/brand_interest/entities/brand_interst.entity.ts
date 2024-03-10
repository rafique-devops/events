import { Field, ObjectType } from '@nestjs/graphql';
import { Event } from 'src/events/entities/event.entity';
import { SponsorshipTier } from 'src/events/events.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'brands_interst_event' })
export class BrandInterest {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => SponsorshipTier)
  @Column()
  sponsorshipTier: SponsorshipTier;

  @Field()
  @Column()
  isInterested: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Event, (events) => events.id)
  @Field(() => Event, { nullable: false })
  eventId: Event;
}
