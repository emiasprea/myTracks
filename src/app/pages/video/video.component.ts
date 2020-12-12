import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";
import { YouTubePlayer } from "@angular/youtube-player";
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  alto:number;
  ancho:number;

  loading:boolean;

  videoId: string;

  //reformo el tamaño del iFrame dinamicamente segun el tamaño de la pantalla

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.ancho=window.innerWidth*0.75
    this.alto=window.innerHeight*0.55
  }


  constructor(private route: ActivatedRoute , private router: Router) {
    this.loading=true;
    this.videoId = this.route.snapshot.paramMap.get('id');  
    setTimeout(() => {
      console.log('cargando');
      this.loading=false;
    }, 1500);
    
  }



  ngOnInit(): void {
    if (window.innerWidth < 480){
      this.ancho=window.innerWidth*0.92;
      this.alto=250
    }else{
      this.alto=400
      this.ancho=window.innerWidth*0.75
    }
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }
}
