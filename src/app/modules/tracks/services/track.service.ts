import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  public readonly URL = environment.apiUrl;

  constructor(public httpClient : HttpClient) {}

  //Metodos

  getAllTracks():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(map((dataRaw:any)=>{
      return dataRaw.data
    }))
  }

  getAllRandom():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(map((dataRaw:any)=>{
      return dataRaw.data.reverse()
    }))
    }
}
