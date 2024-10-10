import { Injectable } from '@angular/core';

export interface EventList {
  id: string;
  event: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventListService {
  private events: EventList[] = [];

  addEvent(id: string, event: string, location: string): void {
    this.events.push({ 
      id, 
      event,  
      location 
    });
  }

  getEvents(): EventList[] {
    return this.events;
  }
}
