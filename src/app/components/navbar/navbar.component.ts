import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Busqueda } from 'src/app/models/busqueda.model';
import { YoutubeService } from 'src/app/services/youtube.service';
import { HomeComponent } from "../../pages/home/home.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  
  constructor( private youtubeService: YoutubeService , private router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
