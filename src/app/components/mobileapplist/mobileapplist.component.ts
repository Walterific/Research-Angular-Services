import { Component } from '@angular/core';
import { MobileAppListService, MobileApp } from '../services/mobileapplist/mobileapplist.service';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  mobileAppList: MobileApp[] = [];
  id: string = '';
  app: string = '';
  descriptions: string = '';

  constructor(private mobileAppListService: MobileAppListService) {
    this.mobileAppList = this.mobileAppListService.getMobileAppList();
  }

  addMobileApp(): void {
    this.mobileAppListService.addMobileApp(this.id, this.app, this.descriptions);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.app = '';
    this.descriptions = '';
  }
}
