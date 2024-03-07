import { registerEnumType } from '@nestjs/graphql';

export enum AttendeeType {
  MEMBER = 'Member',
  NON_MEMBER = 'Non_Member',
}

export enum EventType {
  ONE_TO_ONE = 'One_To_One',
  ONE_TO_MANY = 'One_To_Many',
}

export enum SponsorshipTier {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
}

export enum Status {
  DRAFT = 'Draft',
  LIVE = 'Live',
  INACTIVE = 'Active',
}

registerEnumType(AttendeeType, { name: 'AttendeeType' });
registerEnumType(EventType, { name: 'EventType' });
registerEnumType(SponsorshipTier, { name: 'SponsorshipTier' });
registerEnumType(Status, { name: 'Status' });
