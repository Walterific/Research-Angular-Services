import { Injectable } from '@angular/core';

export interface SoftwareList {
  id: string;
  software: string;
  version: string;
}

@Injectable({
  providedIn: 'root',
})
export class SoftwareListService {
  private softwareList: SoftwareList[] = [];

  addSoftware(id: string, software: string, version: string): void {
    this.softwareList.push({ id, software, version });
  }

  getSoftwareList(): SoftwareList[] {
    return this.softwareList;
  }
}
