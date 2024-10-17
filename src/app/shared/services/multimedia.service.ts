import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, concatMapTo, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any>= new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!:HTMLAudioElement
  public timeElapse$:BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject('--00:00')
  public playStatus$:BehaviorSubject<string> = new BehaviorSubject('Paused')
  public playerPorcentage$:BehaviorSubject<number> = new BehaviorSubject(0)
  

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK =>{
      if(responseOK){
        this.setAudio(responseOK)
      }
    })

    this.listenAllEvent()
  }  

  ngOnInit():void{}
  
  public setAudio(track:TrackModel):void{
    this.audio.src = track.url
    this.audio.play()
 }
 private listenAllEvent():void{
    this.audio.addEventListener('timeupdate',this.calculateTime,false)
    this.audio.addEventListener('playing',this.setPlayerStatus,false)
    this.audio.addEventListener('play',this.setPlayerStatus,false)
    this.audio.addEventListener('pause',this.setPlayerStatus,false)
    this.audio.addEventListener('ended',this.setPlayerStatus,false)
    this.audio.addEventListener('ended',this.setPlayerStatus,false)
  }


  private setPorcentage(currentTime:number,duration:number):void{
    let porcentage= (currentTime * 100)/ duration;
    this.playerPorcentage$.next(porcentage)
  }

  private setPlayerStatus = (state:any)=>{
    switch(state.type){
      default: this.playStatus$.next('paused')
      break;
    case 'play': this.playStatus$.next('play')
    break;

    case 'playing': this.playStatus$.next('playing')
    break;

    case 'ended': this.playStatus$.next('ended')
    break;
    }
      
  }

 private calculateTime=()=>{
  const{duration,currentTime}  = this.audio
  this.setTimeElapse(currentTime)
  this.setTimeRemainin(currentTime,duration)
  this.setPorcentage(currentTime,duration)
 }

 private setTimeElapse(currentTime:number):void{
    let seconds= Math.floor(currentTime % 60)
    let minutes= Math.floor((currentTime / 60) %60)

    const displaySeconds= (seconds < 10)? `0${seconds}`: seconds
    const displayMinutes= (minutes < 10)? `0${minutes}`: minutes
    const displayFormat= `${displayMinutes}:${displaySeconds}`

    this.timeElapse$.next(displayFormat)
 }

 private setTimeRemainin(currentTime:number, duration: number){
   let timeLeft= duration-currentTime

  let seconds= Math.floor(currentTime % 60)
  let minutes= Math.floor((currentTime / 60) %60)

  const displaySeconds= (seconds < 10)? `0${seconds}`: seconds
  const displayMinutes= (minutes < 10)? `0${minutes}`: minutes
  const displayFormat= `${displayMinutes}:${displaySeconds}`

  this.timeRemaining$.next(displayFormat)
 }

 public togglePlayer():void{
  (this.audio.paused) ? this.audio.play() : this.audio.pause()
 }

}
