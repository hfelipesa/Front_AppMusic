import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable, map, pipe,} from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.apiUrl
  constructor(private http:HttpClient) { }

  searchTracks$(term:string):Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${term}`).pipe(
      map((dataRaw:any)=>dataRaw.data)
    )
  }

}
