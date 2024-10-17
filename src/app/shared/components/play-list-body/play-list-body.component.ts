import { Component, Input, input } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
 @Input() tracks:TrackModel[]=[]
  optionSort:{property:string | null, order:string}={property:null, order:'asc'}

  ngOnInit(){
    const data:any=(dataRaw as any).default;
    this.tracks=data.data;
  }

  changeSort(property:string):void{
    const {order}=this.optionSort;
    this.optionSort={
      property:property,
      order:order==='asc'?'desc':'asc'
    }
    console.log(this.optionSort)
  }


}
