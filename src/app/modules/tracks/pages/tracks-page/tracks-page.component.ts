import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl:'./tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnDestroy {
  TracksTrending: Array<TrackModel>=[]
  TracksRandom: Array<TrackModel>=[]

  listObserver$:Array<Subscription>=[]

  constructor(public tracksService:TrackService){}

  ngOnInit():void{
    this.tracksService.getAllTracks()
    .subscribe((response:TrackModel[]) => {
      /* console.log(response) */
      this.TracksTrending = response
    })

    this.tracksService.getAllRandom()
    .subscribe((response:TrackModel[])=>{
      this.TracksRandom = response
      /* console.log(response) */
    })

  }

  ngOnDestroy(): void {
     
  }
}
