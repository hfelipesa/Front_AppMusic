import { Component } from '@angular/core';
import { Router,Navigation } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'tracks'],
       /*  query: { hola: 'mundo' } */
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
        router:[]
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
        router:[]
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }

 /*  goTo($event:any){
    console.log($event)
    this.router.navigate(['/'])
    this.router.navigate(['/','history'])
    this.router.navigate(['/', 'favorites'])
  } */


}

//Explicacion
/*  linksMenu:Array<any>=[
    {
      name:'Home',
      icon:'uil-estate',
    },
    {
      name:'Buscar',
      icon:'uil-estate',
    },
  ] */

