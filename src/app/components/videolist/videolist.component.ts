import { Component } from '@angular/core';
import { VideoListService, Video } from '../services/videolist/videolist.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: Video[] = [];
  id: string = '';
  video: string = '';
  descriptions: string = '';

  constructor(private videoListService: VideoListService) {
    this.videoList = this.videoListService.getVideoList();
  }

  addVideo(): void {
    this.videoListService.addVideo(this.id, this.video, this.descriptions);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.video = '';
    this.descriptions = '';
  }
}
