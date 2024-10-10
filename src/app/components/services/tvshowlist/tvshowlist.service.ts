import { Injectable } from '@angular/core';

export interface TVShow {
  id: string;
  showname: string;
  channel: string;
  parentalGuidance: string;
}

@Injectable({
  providedIn: 'root',
})
export class TVShowListService {
  private tvShowList: TVShow[] = [];

  addShow(id: string, showname: string, channel: string, parentalGuidance: string): void {
    this.tvShowList.push({ id, showname, channel, parentalGuidance });
  }

  getTVShowList(): TVShow[] {
    return this.tvShowList;
  }
}
