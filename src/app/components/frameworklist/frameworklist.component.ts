import { Component } from '@angular/core';
import { FrameworkListService, FrameworkList } from '../services/frameworklist/frameworklist.service';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworks: FrameworkList[] = [];
  id: string = '';
  framework: string = '';
  version: string = '';

  constructor(private frameworkListService: FrameworkListService) {
    this.frameworks = this.frameworkListService.getFrameworks();
  }

  addFramework(): void {
    this.frameworkListService.addFramework(this.id, this.framework, this.version);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.framework = '';
    this.version = '';
  }
}
