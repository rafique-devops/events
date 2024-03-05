
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddEventArgs {
    eventName: string;
    attendeeType: string;
    eventType: string;
    storeName: string;
    eventLocation: string;
    sponsorshipTier: string;
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
    status: string;
    isDeleted: boolean;
}

export interface UpdateEventArgs {
    eventName: string;
    attendeeType: string;
    eventType: string;
    storeName: string;
    eventLocation: string;
    sponsorshipTier: string;
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
    status: string;
    isDeleted: boolean;
}

export interface Event {
    id: string;
    eventName: string;
    attendeeType: string;
    eventType: string;
    storeName: string;
    eventLocation: string;
    sponsorshipTier: string;
    eventDescription: string;
    eventStartDate: string;
    eventStartTime: string;
    eventEndDate: string;
    eventEndTime: string;
    eventCategory: string;
    eventSampling: boolean;
    eventSamplingProduct?: Nullable<string>;
    eventHeroImage: string;
    eventImageCarousal: string;
    eventTnC: string;
    publishToBrands: boolean;
    publishToCustomers: boolean;
    status: string;
    isDeleted: boolean;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export interface IQuery {
    getAllEvents(): Event[] | Promise<Event[]>;
    getEventById(eventId: string): Nullable<Event> | Promise<Nullable<Event>>;
}

export interface IMutation {
    createEvent(addEventArgs: AddEventArgs): Event | Promise<Event>;
    deleteEventById(eventId: string): string | Promise<string>;
    updateEventById(id: string, updateEventArgs: UpdateEventArgs): Event | Promise<Event>;
}

export type DateTime = any;
type Nullable<T> = T | null;
