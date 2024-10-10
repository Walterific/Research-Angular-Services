import { Injectable } from '@angular/core';

export interface DeveloperList {
  id: string;
  softwareTool: string;
  version: string;
}

@Injectable({
  providedIn: 'root',
})
export class DeveloperListService {
  private developers: DeveloperList[] = [];

  addDeveloper(id: string, softwareTool: string, version: string): void {
    this.developers.push({ 
      id, 
      softwareTool,  
      version 
    });
  }

  getDevelopers(): DeveloperList[] {
    return this.developers;
  }
}
