import { Injectable } from '@angular/core';

export interface MobileApp {
  id: string;
  app: string;
  descriptions: string;
}

@Injectable({
  providedIn: 'root',
})
export class MobileAppListService {
  private mobileAppList: MobileApp[] = [];

  addMobileApp(id: string, app: string, descriptions: string): void {
    this.mobileAppList.push({ id, app, descriptions });
  }

  getMobileAppList(): MobileApp[] {
    return this.mobileAppList;
  }
}
