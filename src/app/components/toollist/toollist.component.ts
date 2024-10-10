import { Component } from '@angular/core';
import { ToolListService, ToolList } from '../services/toollist/toollist.service';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  tools: ToolList[] = [];
  id: string = '';
  tool: string = '';

  constructor(private toolListService: ToolListService) {
    this.tools = this.toolListService.getTools();
  }

  addTool(): void {
    this.toolListService.addTool(this.id, this.tool);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.tool = '';
  }
}
