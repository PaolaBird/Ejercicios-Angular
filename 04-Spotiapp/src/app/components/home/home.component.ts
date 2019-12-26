import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
//import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any [] =[]
  // constructor( private http: HttpClient ) { 
  // // haciendo petición get
  // this.http.get("https://restcountries.eu/rest/v2/lang/es").subscribe( (data: any) =>{
  //   this.paises = data
  // } )

  // }
  nuevasCanciones: any[] = []
  loading: boolean
  error: boolean = false
  mensajeError:string

  constructor(private spotify: SpotifyService){
    this.loading = true
    this.spotify.getNewReleases().subscribe((data:any)=>{
      this.nuevasCanciones = data
      this.loading = false
    }, (errorServicio)=>{
      this.error=true
      this.loading = false
      this.mensajeError = errorServicio.error.error.message
    })

  }
}
