import { Injectable } from '@angular/core';

export interface SportList {
  id: string;
  sport: string;
}

@Injectable({
  providedIn: 'root',
})
export class SportListService {
  private sports: SportList[] = [];

  addSport(id: string, sport: string): void {
    this.sports.push({ id, sport });
  }

  getSports(): SportList[] {
    return this.sports;
  }
}
