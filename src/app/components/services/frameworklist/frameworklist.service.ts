import { Injectable } from '@angular/core';

export interface FrameworkList {
  id: string;
  framework: string;
  version: string;
}

@Injectable({
  providedIn: 'root',
})
export class FrameworkListService {
  private frameworks: FrameworkList[] = [];

  addFramework(id: string, framework: string, version: string): void {
    this.frameworks.push({ 
      id, 
      framework, 
      version 
    });
  }

  getFrameworks(): FrameworkList[] {
    return this.frameworks;
  }
}
