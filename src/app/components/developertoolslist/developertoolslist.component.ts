import { Component } from '@angular/core';
import { DeveloperListService, DeveloperList } from '../services/developerlist/developerlist.service';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrl: './developertoolslist.component.css'
})
export class DevelopertoolslistComponent {
  developers: DeveloperList[] = [];
  id: string = '';
  softwareTool: string = '';
  version: string = '';

  constructor(private developerListService: DeveloperListService) {
    this.developers = this.developerListService.getDevelopers();
  }

  addDeveloper(): void {
    this.developerListService.addDeveloper(this.id, this.softwareTool, this.version);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.softwareTool = '';
    this.version = '';
  }
}
