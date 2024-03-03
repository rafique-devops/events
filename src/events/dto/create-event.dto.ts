export class CreateEventDto {
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
  eventSampling: string;
  eventSamplingProduct: string;
  eventHeroImage: string;
  eventImageCarousal: string;
  eventTnC: string;
  publishToBrands: string;
  publishToCustomers: string;
  status: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
