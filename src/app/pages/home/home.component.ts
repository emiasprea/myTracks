import { Component, OnInit } from '@angular/core';
import { Item, YoutubeResponse } from 'src/app/models/youtube.models';
import { YoutubeService } from "../../services/youtube.service";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Busqueda } from "../../models/busqueda.model";
import { MatSlider } from "@angular/material/slider";
import { MatSelect } from "@angular/material/select";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  notas = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

  tonalidades = ['Mayor','Menor'];

  generos = ['Rock','Blues','Funk','Jazz','Heavy Metal','Reggae','Pop','Hard Rock','Country'];

  busqueda: Busqueda={
    nota:'',
    tonalidad:'',
    genero:''
  }

  //ok maneja el boolean de la busqueda
  ok:boolean = false;

  loading: boolean=false;


  constructor( private youtubeService: YoutubeService ) { }

  ngOnInit(){
    this.loading=true;
    this.youtubeService.buscarVideos('')
      .subscribe(
        resp => {
          this.videos=resp;
          this.loading=false;
        }
      )
  }

  videos: Item [];

  buscar(busqueda: NgForm){
    this.loading=true;
    console.log(this.loading);
    console.log(busqueda.value);
    this.busqueda=busqueda.value;
    let cadena = this.busqueda.genero+" "+this.busqueda.nota+" "+this.busqueda.tonalidad;
    this.youtubeService.buscarVideos(cadena).subscribe(
      res => {
        this.videos=res;
        this.ok=true;
        this.loading=false;
      }
    )

  }

  busquedaVacia():boolean{
    if ((this.busqueda.nota=='') && (this.busqueda.tonalidad=='') && (this.busqueda.genero=='')){
      return true;
      console.log(this.busqueda)
    }else{
      return false;
    }
  }


  resetForm(){
    this.busqueda.nota='',
    this.busqueda.tonalidad='',
    this.busqueda.genero=''
  }

  

}
