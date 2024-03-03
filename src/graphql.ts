
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddEventArgs {
    id: number;
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
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface Event {
    id: number;
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
}

export interface IMutation {
    createEvent(addEventArgs: AddEventArgs): string | Promise<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
