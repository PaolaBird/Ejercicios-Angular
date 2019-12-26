import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "623baaf3b1a860a4f6a154b0c381bc8b"
  private urlMoviedb: string = "https://api.themoviedb.org/3"
  peliculas:any [] = []


  constructor( private jsonp: HttpClientJsonpModule, private http: HttpClient) { }
  
  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 ) //Sumando 7 dias a la fecha actual

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}&primary_release_date.lte=${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}&api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, "callback").pipe(map(res=> res))
  }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, "callback").pipe(map(res=> res))
  }

  getPopularesNinos(){
    let url= `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, "callback").pipe(map(res=> res))
  }

  buscarPelicula(texto:string){
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`
    
    return this.http.jsonp(url, "callback").pipe(map(res=>{
      this.peliculas = res['results']
      return res['results']
    }))
  }

  getPelicula(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, "callback").pipe(map(res=>{
     return res
    }))

  }

}
