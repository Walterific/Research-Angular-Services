import { Component } from '@angular/core';
import { SoftwareListService, SoftwareList } from '../services/softwarelist/softwarelist.service';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: SoftwareList[] = [];
  id: string = '';
  software: string = '';
  version: string = '';

  constructor(private softwareListService: SoftwareListService) {
    this.softwareList = this.softwareListService.getSoftwareList();
  }

  addSoftware(): void {
    this.softwareListService.addSoftware(this.id, this.software, this.version);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.software = '';
    this.version = '';
  }
}
