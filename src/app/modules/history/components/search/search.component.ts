import { Component, EventEmitter, Output } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() callBackData:EventEmitter<any> = new EventEmitter()
 
  src:string="";
  
  constructor(){}

  ngOnInit(){

  }
  callSearch (term:string):void{
    /* console.log(term) */
    if(term.length >=3){
      this.callBackData.emit(term) 
  }

}
}
