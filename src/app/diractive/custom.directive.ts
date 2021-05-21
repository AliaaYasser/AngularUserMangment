import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private myElemint:ElementRef) { 
    console.log(myElemint)
  }

  @HostListener('click') click(){
    this.myElemint.nativeElement.style.color="yellow"
  }
 

}
