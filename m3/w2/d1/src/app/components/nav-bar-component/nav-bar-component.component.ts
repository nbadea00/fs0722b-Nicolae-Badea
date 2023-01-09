import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let menu: HTMLButtonElement | null = document.querySelector('#menu-button');
    menu?.addEventListener('click', () =>{
      let ul= document.querySelector('ul') as HTMLElement;
      (ul.style.height === '0px' || ul.style.height === '')? ul.style.height = '70px': ul.style.height = '0px';
    });
  }

}
