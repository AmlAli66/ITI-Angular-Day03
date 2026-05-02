import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class Zoom {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1)';
    this.el.nativeElement.style.transition = '0.4s';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.transition = '0.4s';
  }
}
