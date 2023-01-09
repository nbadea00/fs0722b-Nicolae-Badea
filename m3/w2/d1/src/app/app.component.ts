import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prima_app';
  range:number[] = AppComponent.range(0,6);

  static range(start:number, end:number):number[] {
    let range: number[] = [];
    for (let i = start; i < end; i+=1){
      range.push(i)
    }

    return range;
  }
}
