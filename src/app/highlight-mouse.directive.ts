import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor', 'yellow')*/
      this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor', 'white')*/
      this.backgroundColor = 'white'
  }

  //@HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor
  }

  private backgroundColor?: string;
  

  constructor(
    //private elementRef: ElementRef,
    //private renderer: Renderer2
    ) { }

}
