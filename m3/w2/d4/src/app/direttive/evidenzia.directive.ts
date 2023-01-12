import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

  constructor( private ref : ElementRef ) {
    console.log(ref.nativeElement.style.color)
 if (ref.nativeElement.style.color == 'white'){
  this.textBlack = 'black'
  console.log("ciao")
 }
  }

 @HostBinding('style.backgroundColor') color: string = 'yellow'

  @HostBinding('style.color') textBlack!: string


}
