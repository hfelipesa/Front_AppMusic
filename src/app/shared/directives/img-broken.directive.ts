import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' //nombre de la directiva
})
export class ImgBrokenDirective {
//Escucha el event error
  @HostListener('error') handleError():void{
     const elNAtive =this.elHost.nativeElement;
     /* elNAtive.src='';//Paso imagen por defecto */
     elNAtive.alt='';//Paso texto por defecto

  }
  constructor(private elHost: ElementRef) { }
}
