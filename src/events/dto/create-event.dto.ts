export class CreateEventDto {
  eventType: string;
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  storeLocation: string;
  summary: string;
  eventCategory: string;
  eventHeroImage: string;
  eventImageCarousal: string;
  status: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
