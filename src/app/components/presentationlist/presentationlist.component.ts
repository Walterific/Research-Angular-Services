import { Component } from '@angular/core';
import { PresentationListService, PresentationList } from '../services/presentationlist/presentationlist.service';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentations: PresentationList[] = [];
  id: string = '';
  title: string = '';
  softwareTool: string = '';

  constructor(private presentationListService: PresentationListService) {
    this.presentations = this.presentationListService.getPresentations();
  }

  addPresentation(): void {
    this.presentationListService.addPresentation(this.id, this.title, this.softwareTool);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.title = '';
    this.softwareTool = '';
  }
}
