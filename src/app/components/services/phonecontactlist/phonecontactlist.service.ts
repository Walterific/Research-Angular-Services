import { Injectable } from '@angular/core';

export interface PhoneContact {
  id: string;
  contactName: string;
  number: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhoneContactListService {
  private contacts: PhoneContact[] = [];

  addContact(id: string, contactName: string, number: string): void {
    this.contacts.push({ id, contactName, number });
  }

  getContacts(): PhoneContact[] {
    return this.contacts;
  }
}
