import { Component,ElementRef,OnDestroy, ViewChild} from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnDestroy{
    @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')
    listObserve$:Array<Subscription>=[]
    state:string='paused'
    constructor(public multiMediaService:MultimediaService){}

    ngOnInit() :void{

      const observer$1= this.multiMediaService.playStatus$
      .subscribe(status => this.state = status)
      this.listObserve$=[observer$1]

    /*   this.multiMediaService.trackInfo$.subscribe(
        resp => {
          console.log('Reproduciendo ✔',resp)
        }
      )
 */
/*  const observable1$ = this.multiMediaService.myObservable1$
       .subscribe(
        (respOK)=>{
          console.log('OK 👍')
        },
        (respoFail)=>{'Fail 😒'}
       ) */
      
    }
    ngOnDestroy(): void {
      /* this.listObserve$.forEach(u => u.unsubscribe()) */
    }
  
  handlePosition(event:MouseEvent):void{
    /* console.log(event); */
    const elNative:HTMLElement = this.progressBar.nativeElement
    const {clientX} = event
    const {x, width} =  elNative.getBoundingClientRect()
    
    
    
  }
   
}
