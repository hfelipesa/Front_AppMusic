import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

listResult$:Observable<any> = of([])
constructor(private search:SearchService){}

ngOnInit(){

}

receiveData(event:string):void{
  this.listResult$ = this.search.searchTracks$(event)
}
  

}
