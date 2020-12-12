import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/youtube.models';
import { Router } from "@angular/router";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input() videos: Item [] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verVideo(video: string){
    const route = `/video/${video}`;
    this.router.navigateByUrl(route);
  }

}
