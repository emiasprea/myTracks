import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from "@angular/common/http";
import { YoutubeResponse , Item } from "../models/youtube.models";
import { Busqueda } from "../models/busqueda.model";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  resultadoBusqueda: Item[];

  constructor( private http: HttpClient ) { }

  private apikey     = '';
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private snippet    = 'snippet';
  private nextPage   = '';

  buscarVideos(cadena: string){

    const searchUrl = `${this.youtubeUrl}/search`;

    const params = new HttpParams()
      .set('part',this.snippet)
      .set('q','backing track guitarra '+cadena)
      .set('maxResults','5')
      .set('key',this.apikey)


      //mando como segundo parametro 'params', que es lo mismo que mandar params : params


    return this.http.get<YoutubeResponse>(searchUrl, { params } )
      //filtrado de respuesta de la peticion
      .pipe(
        
        map( resp => {
          this.nextPage = resp.nextPageToken;
          return resp.items;
        }),

        //primer map filtró los items de la resp y llegan al segundo map como un array de items
        //el operador map en items funciona como un forEach

        // map(items => {
        //   return items.map( item => item.snippet )
        //   //transforma el item en un video
        // })
      )
    ;

  }

  guardarVideos(videos: Item[]){}



}
