import { Injectable } from '@angular/core';

export interface Video {
  id: string;
  video: string;
  descriptions: string;
}

@Injectable({
  providedIn: 'root',
})
export class VideoListService {
  private videoList: Video[] = [];

  addVideo(id: string, video: string, descriptions: string): void {
    this.videoList.push({ id, video, descriptions });
  }

  getVideoList(): Video[] {
    return this.videoList;
  }
}
