import { Component } from '@angular/core';
import { TVShowListService, TVShow } from '../services/tvshowlist/tvshowlist.service';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  tvShowList: TVShow[] = [];
  id: string = '';
  showname: string = '';
  channel: string = '';
  parentalGuidance: string = '';

  constructor(private tvShowListService: TVShowListService) {
    this.tvShowList = this.tvShowListService.getTVShowList();
  }

  addShow(): void {
    this.tvShowListService.addShow(this.id, this.showname, this.channel, this.parentalGuidance);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.showname = '';
    this.channel = '';
    this.parentalGuidance = '';
  }
}
