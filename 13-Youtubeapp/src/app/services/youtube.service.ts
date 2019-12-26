import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtube:string = "https://www.googleapis.com/youtube/v3"
  private playlist:string = "UUTJTpwrK4a-ajXs4-Wry09A"
  private apikey:string = "AIzaSyDR0vqPDP7E28L90NxeQrqfoLYJQ_oTFVw"
  private nextPageToken: ""

  constructor(public http: HttpClient ) { }

  getVideos(){
    let url = `${this.youtube}/playlistItems?&`
    let myParams= new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.playlist)
    .set('key', this.apikey)

    if(this.nextPageToken){
      myParams.set('nextPageToken', this.nextPageToken)
    }
    
    return this.http.get(url, { params: myParams }).pipe(map(res=>{
      console.log(res)
      this.nextPageToken = res['nextPageToken']

      let videos :any[] = [];
      for (let video of res.items){
        let snippet = video.snippet
        videos.push(snippet)
      }
      return videos
    }))
  }
}
