import { registerEnumType } from '@nestjs/graphql';

export enum TicketStatus {
  Open = 'Open',
  Closed = 'Closed',
  Mark_As_Sold_Out = 'Mark_As_Sold_Out',
}

export enum TicketSlots {
  Duration = 'Duration',
  Count = 'Count',
}

export enum TicketVisibilityInApp {
  Always_Available = 'Always_Available',
  Always_Hidden = 'Always_Hidden',
  Hidden_When = 'Hidden_When',
}

export enum HiddenWhen {
  Sold_Out = 'Sold_Out',
  Status_Closed = 'Status_Closed',
  Sales_Not_Started = 'Sales_Not_Started',
  Sales_Ended = 'Sales_Ended',
}

export enum TicketType {
  Free = 'Free',
  Paid = 'Paid',
}

export enum TicketConsumptionType {
  Loyalty_Points_Only = 'Loyalty_Points_Only',
  No_Loyalty_Points = 'No_Loyalty_Points',
  Cash_Loyalty_Points = 'Cash_Loyalty_Points',
}

export enum TicketDiscountType {
  Percentage = 'Percentage',
  Flat_Points = 'Flat_Points',
}

registerEnumType(TicketStatus, { name: 'TicketStatus' });
registerEnumType(TicketSlots, { name: 'TicketSlots' });
registerEnumType(TicketVisibilityInApp, { name: 'TicketVisibilityInApp' });
registerEnumType(HiddenWhen, { name: 'HiddenWhen' });
registerEnumType(TicketType, { name: 'TicketType' });
registerEnumType(TicketConsumptionType, { name: 'TicketConsumptionType' });
registerEnumType(TicketDiscountType, { name: 'TicketDiscountType' });
