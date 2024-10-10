import { Component } from '@angular/core';
import { SportListService, SportList } from '../services/sportlist/sportlist.service';


@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sports: SportList[] = [];
  id: string = '';
  sport: string = '';

  constructor(private sportListService: SportListService) {
    this.sports = this.sportListService.getSports();
  }

  addSport(): void {
    this.sportListService.addSport(this.id, this.sport);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.sport = '';
  }
}
