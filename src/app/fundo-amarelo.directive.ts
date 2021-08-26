import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
    //console.log(this.elementRef)
    //evitar alterar o elemento diretamente desse modo -> this.elementRef.nativeElement.style.backgroundColor = 'yellow'
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
      )
   }
}
