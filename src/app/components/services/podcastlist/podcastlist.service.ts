import { Injectable } from '@angular/core';

export interface PodcastList {
  id: string;
  contentCreator: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PodcastListService {
  private podcasts: PodcastList[] = [];

  addPodcast(id: string, contentCreator: string, description: string): void {
    this.podcasts.push({ 
      id, 
      contentCreator,  
      description 
    });
  }

  getPodcasts(): PodcastList[] {
    return this.podcasts;
  }
}
