import { Injectable } from '@angular/core';

export interface ToolList {
  id: string;
  tool: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToolListService {
  private tools: ToolList[] = [];

  addTool(id: string, tool: string): void {
    this.tools.push({ id, tool });
  }

  getTools(): ToolList[] {
    return this.tools;
  }
}
