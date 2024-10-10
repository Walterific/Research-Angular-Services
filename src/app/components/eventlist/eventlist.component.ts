import { Component } from '@angular/core';
import { EventListService, EventList } from '../services/eventlist/eventlist.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  events: EventList[] = [];
  id: string = '';
  event: string = '';
  location: string = '';

  constructor(private eventListService: EventListService) {
    this.events = this.eventListService.getEvents();
  }

  addEvent(): void {
    this.eventListService.addEvent(this.id, this.event, this.location);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.event = '';
    this.location = '';
  }
}
