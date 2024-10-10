import { Component } from '@angular/core';
import { PodcastListService, PodcastList } from '../services/podcastlist/podcastlist.service';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcasts: PodcastList[] = [];
  id: string = '';
  contentCreator: string = '';
  description: string = '';

  constructor(private podcastListService: PodcastListService) {
    this.podcasts = this.podcastListService.getPodcasts();
  }

  addPodcast(): void {
    this.podcastListService.addPodcast(this.id, this.contentCreator, this.description);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.contentCreator = '';
    this.description = '';
  }
}
