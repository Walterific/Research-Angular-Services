import { Component } from '@angular/core';
import { PhoneContactListService, PhoneContact } from '../services/phonecontactlist/phonecontactlist.service';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  contacts: PhoneContact[] = [];
  id: string = '';
  contactName: string = '';
  number: string = '';

  constructor(private phoneContactListService: PhoneContactListService) {
    this.contacts = this.phoneContactListService.getContacts();
  }

  addContact(): void {
    this.phoneContactListService.addContact(this.id, this.contactName, this.number);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.contactName = '';
    this.number = '';
  }
}
