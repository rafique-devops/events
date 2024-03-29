
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum AttendeeType {
    MEMBER = "MEMBER",
    NON_MEMBER = "NON_MEMBER"
}

export enum EventType {
    ONE_TO_ONE = "ONE_TO_ONE",
    ONE_TO_MANY = "ONE_TO_MANY"
}

export enum SponsorshipTier {
    BRONZE = "BRONZE",
    SILVER = "SILVER",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

export enum Status {
    DRAFT = "DRAFT",
    LIVE = "LIVE",
    INACTIVE = "INACTIVE"
}

export enum TicketStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    MARK_AS_SOLD_OUT = "MARK_AS_SOLD_OUT"
}

export enum TicketType {
    FREE = "FREE",
    PAID = "PAID"
}

export enum TicketConsumptionType {
    LOYALTY_POINTS_ONLY = "LOYALTY_POINTS_ONLY",
    NO_LOYALTY_POINTS = "NO_LOYALTY_POINTS",
    CASH_LOYALTY_POINTS = "CASH_LOYALTY_POINTS"
}

export enum TicketDiscountType {
    PERCENTAGE = "PERCENTAGE",
    FLAT_POINTS = "FLAT_POINTS"
}

export enum TicketSlots {
    DURATION = "DURATION",
    COUNT = "COUNT"
}

export enum TicketVisibilityInApp {
    ALWAYS_VISIBLE = "ALWAYS_VISIBLE",
    ALWAYS_HIDDEN = "ALWAYS_HIDDEN",
    HIDDEN_WHEN = "HIDDEN_WHEN"
}

export enum HiddenWhen {
    SOLD_OUT = "SOLD_OUT",
    STATUS_CLOSED = "STATUS_CLOSED",
    SALES_NOT_STARTED = "SALES_NOT_STARTED",
    SALES_ENDED = "SALES_ENDED"
}

export interface AddEventArgs {
    eventName: string;
    attendeeType: AttendeeType;
    eventType: EventType;
    storeName: string;
    eventLocation: string;
    sponsorshipTier: SponsorshipTier;
    eventDescription: string;
    eventStartDate: string;
    eventStartTime: string;
    eventEndDate: string;
    eventEndTime: string;
    eventCategory: string;
    eventSampling: boolean;
    eventSamplingProduct: string;
    eventHeroImage: string;
    eventImageCarousal: string;
    eventTnC: string;
    publishToBrands: boolean;
    publishToCustomers: boolean;
    status: Status;
    isDeleted: boolean;
}

export interface UpdateEventArgs {
    eventName: string;
    attendeeType: AttendeeType;
    eventType: EventType;
    storeName: string;
    eventLocation: string;
    sponsorshipTier: SponsorshipTier;
    eventDescription: string;
    eventStartDate: string;
    eventStartTime: string;
    eventEndDate: string;
    eventEndTime: string;
    eventCategory: string;
    eventSampling: boolean;
    eventSamplingProduct: string;
    eventHeroImage: string;
    eventImageCarousal: string;
    eventTnC: string;
    publishToBrands: boolean;
    publishToCustomers: boolean;
    status: Status;
    isDeleted: boolean;
}

export interface AddTicketArgs {
    ticketName: string;
    ticketColor: string;
    ticketStatus: TicketStatus;
    ticketQuantity: number;
    ticketType: TicketType;
    ticketValue: number;
    ticketConsumptionType: TicketConsumptionType;
    ticketDiscountType: TicketDiscountType;
    ticketDiscountValue: number;
    minimumBuyingLimit: number;
    maximumBuyingLimit: number;
    salesStartDate: string;
    salesStartTime: string;
    salesEndDate: string;
    salesEndTime: string;
    ticketSlotType: TicketSlots;
    ticketSlotValue: string;
    ticketSampleProduct: string;
    ticketDescription: string;
    ticketVisibilityInApp: TicketVisibilityInApp;
    hiddenWhenConditions: HiddenWhen;
    isDeleted: boolean;
}

export interface Event {
    id: string;
    eventName: string;
    attendeeType: AttendeeType;
    eventType: EventType;
    storeName: string;
    eventLocation: string;
    sponsorshipTier: SponsorshipTier;
    eventDescription: string;
    eventStartDate: string;
    eventStartTime: string;
    eventEndDate: string;
    eventEndTime: string;
    eventCategory: string;
    eventSampling: boolean;
    eventSamplingProduct: string;
    eventHeroImage: string;
    eventImageCarousal: string;
    eventTnC: string;
    publishToBrands: boolean;
    publishToCustomers: boolean;
    status: Status;
    isDeleted: boolean;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export interface Ticket {
    id: string;
    ticketName: string;
    ticketColor: string;
    ticketStatus: TicketStatus;
    ticketQuantity: number;
    ticketType: TicketType;
    ticketValue: number;
    ticketConsumptionType: TicketConsumptionType;
    ticketDiscountType: TicketDiscountType;
    ticketDiscountValue: number;
    minimumBuyingLimit: number;
    maximumBuyingLimit: number;
    salesStartDate: string;
    salesStartTime: string;
    salesEndDate: string;
    salesEndTime: string;
    ticketSlotType: TicketSlots;
    ticketSlotValue: string;
    ticketSampleProduct: string;
    ticketDescription: string;
    ticketVisibilityInApp: TicketVisibilityInApp;
    hiddenWhenConditions: HiddenWhen;
    isDeleted: boolean;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export interface IQuery {
    getAllEvents(): Event[] | Promise<Event[]>;
    getEventById(eventId: string): Nullable<Event> | Promise<Nullable<Event>>;
    getAllTickets(): Ticket[] | Promise<Ticket[]>;
}

export interface IMutation {
    createEvent(addEventArgs: AddEventArgs): Event | Promise<Event>;
    deleteEventById(eventId: string): string | Promise<string>;
    updateEventById(id: string, updateEventArgs: UpdateEventArgs): Event | Promise<Event>;
    createTicket(addTicketArgs: AddTicketArgs): Ticket | Promise<Ticket>;
}

export type DateTime = any;
type Nullable<T> = T | null;
