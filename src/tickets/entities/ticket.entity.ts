import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  HiddenWhen,
  TicketConsumptionType,
  TicketDiscountType,
  TicketSlots,
  TicketStatus,
  TicketType,
  TicketVisibilityInApp,
} from '../tickets.enum';
import { Event } from 'src/events/entities/event.entity';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
@Entity({ name: 'event_tickets' })
export class Ticket {
  @ManyToOne(() => Event, (event) => event.tickets)
  @Field(() => Event, { nullable: true })
  eventId: Event;

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  ticketName: string;

  @Column()
  @Field()
  ticketColor: string;

  @Column({
    type: 'enum',
    enum: TicketStatus,
    nullable: false,
  })
  ticketStatus: string;

  @Column()
  @Field()
  ticketQuantity: number;

  @Column({
    type: 'enum',
    enum: TicketType,
    nullable: false,
  })
  ticketType: string;

  @Column()
  @Field()
  ticketValue: number;

  @Column({
    type: 'enum',
    enum: TicketConsumptionType,
    nullable: false,
  })
  ticketConsumptionType: string;

  @Column({
    type: 'enum',
    enum: TicketDiscountType,
    nullable: false,
  })
  ticketDiscountType: string;

  @Column()
  @Field()
  ticketDiscountValue: number;

  @Column()
  @Field()
  minimumBuyingLimit: number;

  @Column()
  @Field()
  maximumBuyingLimit: number;

  @Column()
  @Field()
  saleStartDate: string;

  @Column()
  @Field()
  saleStartTime: string;

  @Column()
  @Field()
  saleEndDate: string;

  @Column()
  @Field()
  saleEndTime: string;

  @Column({
    type: 'enum',
    enum: TicketSlots,
    nullable: false,
  })
  ticketSlotType: string;

  @Column()
  @Field()
  ticketSlotValue: number;

  @Column()
  @Field() //we need to add relationship like OneToOne or OneToMany kind
  ticketSampleProduct: string;

  @Column()
  @Field()
  ticketDescription: string;

  @Column({
    type: 'enum',
    enum: TicketVisibilityInApp,
    nullable: false,
  })
  ticketVisibilityInApp: string;

  @Column({
    type: 'enum',
    enum: HiddenWhen,
    nullable: true,
  })
  ticketHiddenWhen: string;

  @Column()
  @Field()
  isDeleted: boolean;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
