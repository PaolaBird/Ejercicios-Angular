import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl:string = "https://heroesapp-aeb9f.firebaseio.com/Heroe/Hak67gxZ3uri7nY1GO9X/heroes.json"
  heroeUrl: string = "https://heroesapp-aeb9f.firebaseio.com/Heroe/Hak67gxZ3uri7nY1GO9X/heroes/"
  constructor( private http: HttpClient ) {
   }

   nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe)
    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.heroesUrl, body, { headers })
            .pipe(map( result =>{
              console.log(result)
              return result
              })
            )

   }

   actualizarHeroe(heroe:Heroe, key$:string){
    let body = JSON.stringify(heroe)
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    let url =`${this.heroeUrl}/${key$}.json`

    return this.http.put(url, body, { headers })
            .pipe(map( result =>{
              console.log(result)
              return result
              })
            )

   }

   getHeroe( key$:string ){
    let url = `${this.heroeUrl}/${key$}.json`
    return this.http.get(url).pipe(
      map(data=> data)
    )
   }

   getHeroes(){
    return this.http.get(this.heroesUrl).pipe(
      map(data => data)
    )
   }

   borraHeroe(key$){
     let url = `${this.heroeUrl}/${key$}.json`
     return this.http.delete(url).pipe(
       map(data => data)
     )
   }

}
